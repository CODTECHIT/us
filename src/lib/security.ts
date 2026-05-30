import path from 'path';

/**
 * Validates that a file extension is within the allowed list.
 * @param filename Name of the file
 * @param allowedExtensions List of allowed extensions (including dot)
 */
export function validateFileExtension(
  filename: string,
  allowedExtensions: string[] = ['.pdf', '.doc', '.docx', '.txt']
): boolean {
  if (!filename) return false;
  const ext = path.extname(filename).toLowerCase();
  return allowedExtensions.includes(ext);
}

/**
 * Validates that the size of an array buffer or file is within limits.
 * @param byteLength Size of the file in bytes
 * @param maxBytes Maximum allowed size in bytes (default 5MB)
 */
export function validateFileSize(
  byteLength: number,
  maxBytes: number = 5 * 1024 * 1024
): boolean {
  return byteLength <= maxBytes;
}

/**
 * Sanitizes a URL string to prevent protocol-based Stored XSS (e.g., javascript: urls).
 * Only allows relative paths starting with '/' or absolute URLs with http: or https: protocols.
 * Returns null if the URL is invalid or unsafe.
 */
export function sanitizeUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // Allow relative URLs starting with /
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    // Relative URLs should not contain a colon before a slash
    const colonIndex = trimmed.indexOf(':');
    const slashIndex = trimmed.indexOf('/');
    if (colonIndex !== -1 && (slashIndex === -1 || colonIndex < slashIndex)) {
      return null; // Block potential protocol masquerading
    }
    return trimmed;
  }

  // Verify absolute URL with URL constructor
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return trimmed;
    }
  } catch (_) {
    // Fail closed if not a valid URL
  }

  return null;
}
