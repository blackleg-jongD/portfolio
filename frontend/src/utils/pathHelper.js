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
  
  const baseUrl = getBaseUrl();
  
  // If path already starts with base URL, return as is
  if (path.startsWith(baseUrl)) {
    return path;
  }
  
  // If path starts with http:// or https://, return as is (absolute URL)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Handle absolute paths (starting with /)
  if (path.startsWith('/')) {
    // Remove leading slash and add base URL
    // baseUrl already ends with / (e.g., '/portfolio/')
    return `${baseUrl}${path.slice(1)}`;
  }
  
  // Handle relative paths
  return `${baseUrl}${path}`;
}
