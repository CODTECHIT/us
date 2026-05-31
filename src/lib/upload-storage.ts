import { mkdir, readFile, readdir, unlink, writeFile } from "fs/promises";
import { extname, join, normalize } from "path";
import os from "os";

const PRIMARY_UPLOAD_ROOT = join(process.cwd(), "public/uploads");
const FALLBACK_UPLOAD_ROOT = join(os.tmpdir(), "maxera-talent/uploads");

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

  for (const root of getUploadRoots()) {
    const targetPath = join(root, safeRelativePath);

    try {
      await ensureParentDirectory(targetPath);
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

    try {
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

    try {
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

    try {
      return await readFile(targetPath);
    } catch (error) {
      console.warn(`[upload-storage] Failed to read ${targetPath}:`, error);
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
