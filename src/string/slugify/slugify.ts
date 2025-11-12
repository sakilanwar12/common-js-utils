/**
 * Converts a string to a URL-friendly slug.
 * @param str - The string to convert to a slug
 * @returns The string as a URL-friendly slug
 */
export function slugify(str: string): string {
  if (typeof str !== "string" || !str.length) return "";
  
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "-") // Replace special characters with hyphens
    .replace(/[\s_-]+/g, "-") // Replace multiple spaces/hyphens/underscores with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}

