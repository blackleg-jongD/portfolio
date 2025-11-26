/**
 * About Section Component
 * Displays about section content
 */

import { loadAboutContent } from '../../utils/dataLoader.js';
import './about.css';

/**
 * Create About section
 * @returns {HTMLElement} About section element
 */
export async function createAbout() {
  const about = document.createElement('section');
  about.className = 'about';
  about.id = 'about';

  const container = document.createElement('div');
  container.className = 'container';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '소개';

  const content = document.createElement('div');
  content.className = 'about-content';

  // Loading state
  content.innerHTML = '<p>내용을 불러오는 중...</p>';

  container.appendChild(title);
  container.appendChild(content);
  about.appendChild(container);

  // Load about content
  try {
    const aboutData = await loadAboutContent();
    renderAboutContent(content, aboutData);
  } catch (error) {
    console.error('Error loading about content:', error);
    // Fallback content
    content.innerHTML = `
      <p>안녕하세요. 임베디드 시스템과 로봇 공학에 열정을 가진 개발자입니다.</p>
      <p>하드웨어와 소프트웨어의 경계에서 새로운 가능성을 찾아가는 것을 즐깁니다.</p>
    `;
  }

  return about;
}

/**
 * Render about content
 * @param {HTMLElement} container - Container element
 * @param {Object} aboutData - About content data
 */
function renderAboutContent(container, aboutData) {
  container.innerHTML = '';

  if (aboutData && aboutData.sections && Array.isArray(aboutData.sections)) {
    aboutData.sections.forEach((section) => {
      if (section.type === 'paragraph') {
        const paragraph = document.createElement('p');
        paragraph.textContent = section.content;
        container.appendChild(paragraph);
      } else if (section.type === 'heading') {
        const heading = document.createElement('h3');
        heading.textContent = section.content;
        container.appendChild(heading);
      }
    });
  }
}
