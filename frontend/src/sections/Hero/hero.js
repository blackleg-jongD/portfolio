/**
 * Hero Section Component
 * Displays personal information and introduction
 */

/**
 * Create Hero section
 * @param {Object} personalInfo - Personal information object
 * @returns {HTMLElement} Hero section element
 */
export function createHero(personalInfo) {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.id = 'hero';

  const container = document.createElement('div');
  container.className = 'container';

  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';

  // Name
  const name = document.createElement('h1');
  name.className = 'hero-name';
  name.textContent = personalInfo.name || '';

  // Title
  const title = document.createElement('h2');
  title.className = 'hero-title';
  title.textContent = personalInfo.title || '';

  // Bio
  const bio = document.createElement('p');
  bio.className = 'hero-bio';
  bio.textContent = personalInfo.bio || '';

  // Location (optional)
  if (personalInfo.location) {
    const location = document.createElement('p');
    location.className = 'hero-location';
    location.textContent = personalInfo.location;
    heroContent.appendChild(location);
  }

  // Avatar (optional)
  if (personalInfo.avatar) {
    const avatarContainer = document.createElement('div');
    avatarContainer.className = 'hero-avatar-container';
    const avatar = document.createElement('img');
    avatar.src = personalInfo.avatar;
    avatar.alt = `${personalInfo.name || 'Portfolio'} 프로필 이미지`;
    avatar.className = 'hero-avatar';
    avatar.loading = 'eager';
    avatar.onerror = function () {
      this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23e0e0e0" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="14" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E프로필 이미지%3C/text%3E%3C/svg%3E';
      this.alt = '프로필 이미지를 불러올 수 없습니다';
    };
    avatarContainer.appendChild(avatar);
    heroContent.insertBefore(avatarContainer, heroContent.firstChild);
  }

  heroContent.appendChild(name);
  heroContent.appendChild(title);
  heroContent.appendChild(bio);

  container.appendChild(heroContent);
  hero.appendChild(container);

  return hero;
}
