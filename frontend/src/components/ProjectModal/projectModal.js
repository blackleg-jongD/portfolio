/**
 * Project Modal Component
 * Displays detailed project information in a modal
 */

import { generateProjectPlaceholder } from '../../utils/imagePlaceholder.js';
import { resolveAssetPath } from '../../utils/pathHelper.js';

/**
 * Create project modal
 * @param {Object} project - Project object
 * @returns {HTMLElement} Modal element
 */
export function createProjectModal(project) {
  const modal = document.createElement('div');
  modal.className = 'project-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-labelledby', 'project-modal-title');
  modal.setAttribute('aria-modal', 'true');

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', '모달 닫기');
  closeBtn.addEventListener('click', () => closeModal(modal));

  // Header
  const header = document.createElement('div');
  header.className = 'modal-header';

  const title = document.createElement('h2');
  title.id = 'project-modal-title';
  title.className = 'modal-title';
  title.textContent = project.title;

  header.appendChild(title);
  header.appendChild(closeBtn);

  // Body
  const body = document.createElement('div');
  body.className = 'modal-body';

  // Images
  if (project.images && project.images.length > 0) {
    const imageGallery = document.createElement('div');
    imageGallery.className = 'project-images';
    project.images.forEach((imageUrl) => {
      const img = document.createElement('img');
      img.src = resolveAssetPath(imageUrl);
      img.alt = `${project.title} 이미지`;
      img.loading = 'lazy';
      img.onerror = function () {
        this.src = generateProjectPlaceholder(project.title, project.id, 800, 600);
        this.alt = '이미지를 불러올 수 없습니다';
      };
      imageGallery.appendChild(img);
    });
    body.appendChild(imageGallery);
  } else if (project.thumbnail) {
    const thumbnail = document.createElement('img');
    thumbnail.src = resolveAssetPath(project.thumbnail);
    thumbnail.alt = `${project.title} 썸네일`;
    thumbnail.className = 'project-main-image';
    thumbnail.onerror = function () {
      this.src = generateProjectPlaceholder(project.title, project.id, 800, 600);
      this.alt = '이미지를 불러올 수 없습니다';
    };
    body.appendChild(thumbnail);
  }

  // Description
  if (project.longDescription || project.description) {
    const description = document.createElement('div');
    description.className = 'project-description';
    const descriptionText = document.createElement('p');
    descriptionText.textContent = project.longDescription || project.description;
    description.appendChild(descriptionText);
    body.appendChild(description);
  }

  // Details
  const details = document.createElement('div');
  details.className = 'project-details';

  if (project.technologies && project.technologies.length > 0) {
    const techSection = document.createElement('div');
    techSection.className = 'detail-section';
    const techLabel = document.createElement('strong');
    techLabel.textContent = '사용 기술: ';
    techSection.appendChild(techLabel);
    project.technologies.forEach((tech, index) => {
      const techTag = document.createElement('span');
      techTag.className = 'tech-tag';
      techTag.textContent = tech;
      techSection.appendChild(techTag);
      if (index < project.technologies.length - 1) {
        techSection.appendChild(document.createTextNode(', '));
      }
    });
    details.appendChild(techSection);
  }

  if (project.role) {
    const roleSection = document.createElement('div');
    roleSection.className = 'detail-section';
    roleSection.innerHTML = `<strong>역할:</strong> ${project.role}`;
    details.appendChild(roleSection);
  }

  if (project.startDate || project.endDate) {
    const dateSection = document.createElement('div');
    dateSection.className = 'detail-section';
    const dateText = project.endDate
      ? `${project.startDate} ~ ${project.endDate}`
      : `${project.startDate} ~ 진행 중`;
    dateSection.innerHTML = `<strong>기간:</strong> ${dateText}`;
    details.appendChild(dateSection);
  }

  if (project.achievements && project.achievements.length > 0) {
    const achievementsSection = document.createElement('div');
    achievementsSection.className = 'detail-section';
    const achievementsTitle = document.createElement('strong');
    achievementsTitle.textContent = '주요 성과:';
    achievementsSection.appendChild(achievementsTitle);
    const achievementsList = document.createElement('ul');
    project.achievements.forEach((achievement) => {
      const li = document.createElement('li');
      li.textContent = achievement;
      achievementsList.appendChild(li);
    });
    achievementsSection.appendChild(achievementsList);
    details.appendChild(achievementsSection);
  }

  body.appendChild(details);

  // Footer with links
  const footer = document.createElement('div');
  footer.className = 'modal-footer';

  const links = document.createElement('div');
  links.className = 'project-links';

  if (project.demoUrl) {
    const demoLink = document.createElement('a');
    demoLink.href = project.demoUrl;
    demoLink.textContent = '🚀 데모 보기';
    demoLink.className = 'project-link-button demo';
    demoLink.target = '_blank';
    demoLink.rel = 'noopener noreferrer';
    links.appendChild(demoLink);
  }

  if (project.githubUrl) {
    const githubLink = document.createElement('a');
    githubLink.href = project.githubUrl;
    githubLink.textContent = '📦 GitHub';
    githubLink.className = 'project-link-button github';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    links.appendChild(githubLink);
  }

  if (project.externalUrl) {
    const externalLink = document.createElement('a');
    externalLink.href = project.externalUrl;
    externalLink.textContent = '🔗 외부 링크';
    externalLink.className = 'project-link-button external';
    externalLink.target = '_blank';
    externalLink.rel = 'noopener noreferrer';
    links.appendChild(externalLink);
  }

  footer.appendChild(links);

  modalContent.appendChild(header);
  modalContent.appendChild(body);
  modalContent.appendChild(footer);
  modal.appendChild(modalOverlay);
  modal.appendChild(modalContent);

  // Close on overlay click
  modalOverlay.addEventListener('click', () => closeModal(modal));

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  // Trap focus inside modal
  trapFocus(modalContent);

  return modal;
}

/**
 * Close modal
 * @param {HTMLElement} modal - Modal element to close
 */
function closeModal(modal) {
  modal.classList.add('closing');
  setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
    document.body.style.overflow = '';
  }, 300);
}

/**
 * Open modal
 * @param {HTMLElement} modal - Modal element to open
 */
export function openModal(modal) {
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    modal.classList.add('open');
  }, 10);

  // Focus first focusable element
  const firstFocusable = modal.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (firstFocusable) {
    firstFocusable.focus();
  }
}

/**
 * Trap focus inside modal for accessibility
 * @param {HTMLElement} container - Modal content container
 */
function trapFocus(container) {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  container.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });
}
