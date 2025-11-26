/**
 * Project Card Component
 * Displays a project in card format
 */

import { generateProjectPlaceholder } from '../../utils/imagePlaceholder.js';

/**
 * Create a project card element
 * @param {Object} project - Project object from data
 * @returns {HTMLElement} Project card element
 */
export function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-project-id', project.id);

  // Thumbnail
  const thumbnailContainer = document.createElement('div');
  thumbnailContainer.className = 'project-card-thumbnail';
  const thumbnail = document.createElement('img');
  
  // Use placeholder if thumbnail doesn't exist or fails to load
  const placeholder = generateProjectPlaceholder(project.title, project.id, 400, 300);
  thumbnail.src = project.thumbnail || placeholder;
  thumbnail.alt = `${project.title} 썸네일`;
  thumbnail.loading = 'lazy';
  thumbnail.onerror = function () {
    this.src = placeholder;
    this.alt = '이미지를 불러올 수 없습니다';
  };
  thumbnailContainer.appendChild(thumbnail);

  // Content
  const content = document.createElement('div');
  content.className = 'project-card-content';

  // Title
  const title = document.createElement('h3');
  title.className = 'project-card-title';
  title.textContent = project.title;

  // Description
  const description = document.createElement('p');
  description.className = 'project-card-description';
  description.textContent = project.description || '';

  // Technologies
  if (project.technologies && project.technologies.length > 0) {
    const techContainer = document.createElement('div');
    techContainer.className = 'project-card-tech';
    project.technologies.slice(0, 5).forEach((tech) => {
      const techTag = document.createElement('span');
      techTag.className = 'tech-tag';
      techTag.textContent = tech;
      techContainer.appendChild(techTag);
    });
    content.appendChild(techContainer);
  }

  // Links
  const links = document.createElement('div');
  links.className = 'project-card-links';

  if (project.demoUrl) {
    const demoLink = document.createElement('a');
    demoLink.href = project.demoUrl;
    demoLink.textContent = 'Demo';
    demoLink.className = 'project-link demo-link';
    demoLink.target = '_blank';
    demoLink.rel = 'noopener noreferrer';
    links.appendChild(demoLink);
  }

  if (project.githubUrl) {
    const githubLink = document.createElement('a');
    githubLink.href = project.githubUrl;
    githubLink.textContent = 'GitHub';
    githubLink.className = 'project-link github-link';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    links.appendChild(githubLink);
  }

  const viewMoreBtn = document.createElement('button');
  viewMoreBtn.className = 'project-link view-more-btn';
  viewMoreBtn.textContent = '자세히 보기';
  viewMoreBtn.setAttribute('aria-label', `${project.title} 자세히 보기`);
  links.appendChild(viewMoreBtn);

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(links);

  card.appendChild(thumbnailContainer);
  card.appendChild(content);

  // Add click handler for view more
  viewMoreBtn.addEventListener('click', () => {
    const event = new CustomEvent('projectCardClick', {
      detail: { project },
      bubbles: true,
    });
    card.dispatchEvent(event);
  });

  return card;
}
