/**
 * Social Links Component
 * Displays social media links
 */

/**
 * Create social links component
 * @param {Object} socialLinks - Social links object
 * @returns {HTMLElement} Social links container
 */
export function createSocialLinks(socialLinks) {
  const container = document.createElement('div');
  container.className = 'social-links';

  const platforms = {
    github: { label: 'GitHub', icon: '🔗' },
    linkedin: { label: 'LinkedIn', icon: '💼' },
    twitter: { label: 'Twitter', icon: '🐦' },
    blog: { label: 'Blog', icon: '📝' },
    website: { label: 'Website', icon: '🌐' },
  };

  Object.entries(socialLinks).forEach(([platform, url]) => {
    if (!url) return;

    const platformInfo = platforms[platform] || { label: platform, icon: '🔗' };

    const link = document.createElement('a');
    link.href = url;
    link.textContent = `${platformInfo.icon} ${platformInfo.label}`;
    link.className = 'social-link';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${platformInfo.label} 프로필`);

    container.appendChild(link);
  });

  return container;
}
