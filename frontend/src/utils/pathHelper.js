/**
 * Path Helper Utility
 * Handles base path for GitHub Pages deployment
 */

/**
 * Get the base URL from Vite's environment
 * In production with base path '/portfolio/', this returns '/portfolio/'
 * In development, this returns '/'
 * @returns {string} Base URL
 */
export function getBaseUrl() {
  return import.meta.env.BASE_URL || '/';
}

/**
 * Resolve an asset path with base URL
 * @param {string} path - Asset path (e.g., '/assets/images/avatar.jpg')
 * @returns {string} Resolved path with base URL
 */
export function resolveAssetPath(path) {
  if (!path) return '';
  
  // If path already starts with base URL, return as is
  const baseUrl = getBaseUrl();
  if (path.startsWith(baseUrl)) {
    return path;
  }
  
  // Remove leading slash if present and add base URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}
