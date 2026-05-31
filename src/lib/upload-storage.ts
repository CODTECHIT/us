import { mkdir, readFile, readdir, unlink, writeFile, stat } from "fs/promises";
import fs from "fs";
import { extname, join, normalize, dirname, resolve, sep } from "path";
import os from "os";

const PRIMARY_UPLOAD_ROOT = join(process.cwd(), "public/uploads");
const FALLBACK_UPLOAD_ROOT = join(os.tmpdir(), "maxera-talent", "uploads");

function getUploadRoots() {
  const configuredRoot = process.env.UPLOAD_DIR?.trim();

  return Array.from(
    new Set(
      [configuredRoot, PRIMARY_UPLOAD_ROOT, FALLBACK_UPLOAD_ROOT].filter(
        (root): root is string => Boolean(root),
      ),
    ),
  );
}

function normalizeRelativePath(relativePath: string) {
  return normalize(relativePath)
    .replace(/^[\\/]+/, "")
    .replace(/\\/g, "/");
}

async function ensureParentDirectory(filePath: string) {
  const parentDirectory = filePath.slice(0, filePath.lastIndexOf("/"));
  if (parentDirectory) {
    await mkdir(parentDirectory, { recursive: true });
  }
}

export async function saveUploadFile(relativePath: string, buffer: Buffer) {
  const safeRelativePath = normalizeRelativePath(relativePath);

  // Reject any path containing parent-traversal segments immediately
  if (safeRelativePath.split("/").includes("..")) {
    throw new Error("Invalid upload path");
  }

  for (const root of getUploadRoots()) {
    const targetPath = join(root, safeRelativePath);
    const resolved = resolve(root, safeRelativePath);
    const rootResolved = resolve(root);

    // Ensure the resolved target is inside the configured root directory
    if (
      !(resolved === rootResolved || resolved.startsWith(rootResolved + sep))
    ) {
      console.warn(
        `[upload-storage] Refusing to write outside upload root: ${resolved}`,
      );
      continue;
    }

    try {
      // Ensure parent directory exists synchronously to avoid EISDIR/ENOENT races
      const parentDir = dirname(targetPath);
      try {
        fs.mkdirSync(parentDir, { recursive: true });
      } catch (e) {
        // ignore
      }

      // Also ensure async mkdir for environments relying on promises
      await mkdir(parentDir, { recursive: true });

      await writeFile(targetPath, buffer);
      return { path: targetPath, publicUrl: `/uploads/${safeRelativePath}` };
    } catch (error) {
      console.warn(`[upload-storage] Failed to write ${targetPath}:`, error);
    }
  }

  throw new Error("Unable to persist uploaded file");
}

export async function listUploadFiles(relativeDir = "") {
  const safeRelativeDir = normalizeRelativePath(relativeDir);
  const seen = new Set<string>();
  const files: Array<{ name: string; url: string }> = [];

  for (const root of getUploadRoots()) {
    const targetDir = join(root, safeRelativeDir);
    const resolved = resolve(root, safeRelativeDir);
    const rootResolved = resolve(root);
    if (
      !(resolved === rootResolved || resolved.startsWith(rootResolved + sep))
    ) {
      console.warn(
        `[upload-storage] Refusing to list outside upload root: ${resolved}`,
      );
      continue;
    }

    try {
      // Ensure the root/target directory exists synchronously to avoid ENOENT races
      try {
        fs.mkdirSync(resolve(root), { recursive: true });
      } catch (e) {
        // ignore
      }
      await mkdir(targetDir, { recursive: true });
      const entries = await readdir(targetDir);

      for (const entry of entries) {
        if (seen.has(entry)) continue;
        seen.add(entry);
        files.push({
          name: entry,
          url: `/uploads/${safeRelativeDir ? `${safeRelativeDir}/` : ""}${entry}`,
        });
      }
    } catch (error) {
      console.warn(`[upload-storage] Failed to read ${targetDir}:`, error);
    }
  }

  return files.reverse();
}

export async function deleteUploadFile(relativePath: string) {
  const safeRelativePath = normalizeRelativePath(relativePath);
  let lastError: unknown = null;

  for (const root of getUploadRoots()) {
    const targetPath = join(root, safeRelativePath);
    const resolved = resolve(root, safeRelativePath);
    const rootResolved = resolve(root);
    if (
      !(resolved === rootResolved || resolved.startsWith(rootResolved + sep))
    ) {
      console.warn(
        `[upload-storage] Refusing to delete outside upload root: ${resolved}`,
      );
      continue;
    }

    try {
      // Check if targetPath exists and is a file (not a directory)
      try {
        const st = await stat(targetPath);
        if (st.isDirectory()) {
          console.warn(
            `[upload-storage] Skipping unlink for directory ${targetPath}`,
          );
          continue;
        }
      } catch (e) {
        // stat failed (file may not exist) — proceed to unlink and let it fail
      }

      await unlink(targetPath);
      return true;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Unable to delete uploaded file");
}

export async function readUploadFile(relativePath: string) {
  const safeRelativePath = normalizeRelativePath(relativePath);

  for (const root of getUploadRoots()) {
    const targetPath = join(root, safeRelativePath);
    const resolved = resolve(root, safeRelativePath);
    const rootResolved = resolve(root);
    if (
      !(resolved === rootResolved || resolved.startsWith(rootResolved + sep))
    ) {
      console.warn(
        `[upload-storage] Refusing to read outside upload root: ${resolved}`,
      );
      continue;
    }

    try {
      // Ensure target is a file, not a directory
      try {
        const st = await stat(targetPath);
        if (st.isDirectory()) {
          console.warn(
            `[upload-storage] Refusing to read directory ${targetPath}`,
          );
          continue;
        }
      } catch (e) {
        // stat failed — file may not exist; fall through to readFile which will throw
      }

      return await readFile(targetPath);
    } catch (error) {
      console.warn(`[upload-storage] Failed to read ${targetPath}:`, error);
    }
  }

  return null;
}

export async function readUploadFileStream(relativePath: string) {
  const safeRelativePath = normalizeRelativePath(relativePath);

  for (const root of getUploadRoots()) {
    const targetPath = join(root, safeRelativePath);
    const resolved = resolve(root, safeRelativePath);
    const rootResolved = resolve(root);
    if (
      !(resolved === rootResolved || resolved.startsWith(rootResolved + sep))
    ) {
      console.warn(
        `[upload-storage] Refusing to read outside upload root: ${resolved}`,
      );
      continue;
    }

    try {
      const st = await stat(targetPath);
      if (st.isDirectory()) {
        console.warn(
          `[upload-storage] Refusing to read directory ${targetPath}`,
        );
        continue;
      }
      return {
        stream: fs.createReadStream(targetPath),
        size: st.size,
      };
    } catch (error) {
      console.warn(`[upload-storage] Failed to check or stream ${targetPath}:`, error);
    }
  }

  return null;
}

export function getUploadContentType(filename: string) {
  switch (extname(filename).toLowerCase()) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".gif":
      return "image/gif";
    case ".webp":
      return "image/webp";
    case ".svg":
      return "image/svg+xml";
    case ".pdf":
      return "application/pdf";
    case ".doc":
      return "application/msword";
    case ".docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    case ".xlsx":
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    case ".txt":
      return "text/plain; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}
