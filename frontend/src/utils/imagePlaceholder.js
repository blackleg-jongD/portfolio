/**
 * Generate placeholder images for projects
 * Creates SVG placeholders with tech-themed designs
 */

/**
 * Get Unsplash placeholder URL for embedded/robotics projects
 * @param {string} projectId - Project ID to determine image category
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} Unsplash URL or null
 */
function getUnsplashPlaceholder(projectId, width = 400, height = 300) {
  const searchTerms = {
    'autonomous-delivery-robot': 'autonomous+robot+delivery',
    'robotic-arm-control': 'robotic+arm+industrial',
    'smart-factory-monitoring': 'smart+factory+iot',
    'autonomous-drone': 'drone+autonomous',
    'embedded-linux-system': 'circuit+board+electronics',
  };
  
  const searchTerm = searchTerms[projectId] || 'robotics+technology';
  // Note: Unsplash Source API is deprecated, but placeholder.com or similar services can be used
  // For now, we'll use SVG placeholder
  return null;
}

/**
 * Generate a placeholder image URL for a project
 * @param {string} projectTitle - Project title
 * @param {string} projectId - Project ID
 * @param {number} width - Image width (default: 400)
 * @param {number} height - Image height (default: 300)
 * @returns {string} SVG data URL
 */
export function generateProjectPlaceholder(projectTitle, projectId, width = 400, height = 300) {
  // Tech-themed colors matching the portfolio theme
  const colors = {
    bg: '#0a0e27',
    grid: '#00D9FF',
    accent: '#FF6B35',
    text: '#E0E6ED',
  };

  // Extract first letter for icon
  const firstLetter = projectTitle.charAt(0).toUpperCase();

  // Create SVG with embedded styles for tech look
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad-${projectId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00D9FF;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#FF6B35;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="${colors.bg}"/>
  
  <!-- Grid pattern -->
  <g stroke="${colors.grid}" stroke-width="0.5" opacity="0.3">
    ${Array.from({ length: Math.ceil(width / 20) }, (_, i) => 
      `<line x1="${i * 20}" y1="0" x2="${i * 20}" y2="${height}"/>`
    ).join('')}
    ${Array.from({ length: Math.ceil(height / 20) }, (_, i) => 
      `<line x1="0" y1="${i * 20}" x2="${width}" y2="${i * 20}"/>`
    ).join('')}
  </g>
  
  <!-- Gradient overlay -->
  <rect width="${width}" height="${height}" fill="url(#grad-${projectId})"/>
  
  <!-- Tech icon (circuit board style) -->
  <g transform="translate(${width/2}, ${height/2 - 30})" opacity="0.6">
    <rect x="-30" y="-20" width="60" height="40" fill="none" stroke="${colors.grid}" stroke-width="2" rx="4"/>
    <circle cx="-15" cy="0" r="3" fill="${colors.grid}"/>
    <circle cx="15" cy="0" r="3" fill="${colors.grid}"/>
    <line x1="-15" y1="0" x2="15" y2="0" stroke="${colors.grid}" stroke-width="1"/>
    <text x="0" y="8" text-anchor="middle" fill="${colors.grid}" font-family="monospace" font-size="20" font-weight="bold">${firstLetter}</text>
  </g>
  
  <!-- Project title -->
  <text x="${width/2}" y="${height - 40}" text-anchor="middle" fill="${colors.text}" font-family="sans-serif" font-size="14" font-weight="600">${projectTitle}</text>
  <text x="${width/2}" y="${height - 20}" text-anchor="middle" fill="${colors.grid}" font-family="monospace" font-size="10" opacity="0.7">프로젝트 이미지 준비 중</text>
</svg>`.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
