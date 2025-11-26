/**
 * Contact Section Component
 * Displays contact information and social links
 */

import { loadContactInfo } from '../../utils/dataLoader.js';
import { createSocialLinks } from '../../components/SocialLinks/socialLinks.js';
import './contact.css';

/**
 * Create Contact section
 * @returns {HTMLElement} Contact section element
 */
export async function createContact() {
  const contact = document.createElement('section');
  contact.className = 'contact';
  contact.id = 'contact';

  const container = document.createElement('div');
  container.className = 'container';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '연락처';

  const contactContent = document.createElement('div');
  contactContent.className = 'contact-content';

  // Loading state
  contactContent.innerHTML = '<p>연락처 정보를 불러오는 중...</p>';

  container.appendChild(title);
  container.appendChild(contactContent);
  contact.appendChild(container);

  // Load contact info
  try {
    const contactInfo = await loadContactInfo();
    renderContact(contactContent, contactInfo);
  } catch (error) {
    console.error('Error loading contact info:', error);
    contactContent.innerHTML = '<p>연락처 정보를 불러오는 중 오류가 발생했습니다.</p>';
  }

  return contact;
}

/**
 * Render contact information
 * @param {HTMLElement} container - Container element
 * @param {Object} contactInfo - Contact information object
 */
function renderContact(container, contactInfo) {
  container.innerHTML = '';

  const contactInfoDiv = document.createElement('div');
  contactInfoDiv.className = 'contact-info';

  // Email
  if (contactInfo.email) {
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${contactInfo.email}`;
    emailLink.className = 'contact-email';
    emailLink.textContent = contactInfo.email;
    contactInfoDiv.appendChild(emailLink);
  }

  // Location (optional)
  if (contactInfo.location) {
    const location = document.createElement('p');
    location.className = 'contact-location';
    location.textContent = contactInfo.location;
    contactInfoDiv.appendChild(location);
  }

  container.appendChild(contactInfoDiv);

  // Social links
  if (contactInfo.socialLinks) {
    const socialLinks = createSocialLinks(contactInfo.socialLinks);
    container.appendChild(socialLinks);
  }
}