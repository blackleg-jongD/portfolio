/**
 * Footer Component
 * Displays footer information
 */

export function createFooter(contactInfo) {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const container = document.createElement('div');
  container.className = 'container';

  const footerContent = document.createElement('div');
  footerContent.className = 'footer-content';

  // Copyright
  const copyright = document.createElement('p');
  copyright.className = 'footer-copyright';
  const currentYear = new Date().getFullYear();
  copyright.textContent = `© ${currentYear} All rights reserved.`;

  footerContent.appendChild(copyright);

  // Social links (if available)
  if (contactInfo && contactInfo.socialLinks) {
    import('../SocialLinks/socialLinks.js').then((module) => {
      const { createSocialLinks } = module;
      const socialLinks = createSocialLinks(contactInfo.socialLinks);
      socialLinks.className = 'footer-social';
      footerContent.appendChild(socialLinks);
    });
  }

  container.appendChild(footerContent);
  footer.appendChild(container);

  return footer;
}
