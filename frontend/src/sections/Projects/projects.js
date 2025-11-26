/**
 * Projects Section Component
 * Displays projects in a grid with filtering capabilities
 */

import { createProjectCard } from '../../components/ProjectCard/projectCard.js';
import { filterProjectsByTechnology, getUniqueTechnologies } from '../../utils/projectFilter.js';
import { loadProjects } from '../../utils/dataLoader.js';
import './projects.css';

let allProjects = [];
let currentFilter = 'all';

/**
 * Create Projects section
 * @returns {HTMLElement} Projects section element
 */
export async function createProjects() {
  const projects = document.createElement('section');
  projects.className = 'projects';
  projects.id = 'projects';

  const container = document.createElement('div');
  container.className = 'container';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = 'Projects';

  // Filter buttons container
  const filterContainer = document.createElement('div');
  filterContainer.className = 'projects-filter';
  filterContainer.setAttribute('role', 'group');
  filterContainer.setAttribute('aria-label', '프로젝트 필터');

  // Projects grid container
  const projectsGrid = document.createElement('div');
  projectsGrid.className = 'projects-grid';
  projectsGrid.setAttribute('role', 'list');

  // Loading state
  projectsGrid.innerHTML = '<p>프로젝트를 불러오는 중...</p>';

  container.appendChild(title);
  container.appendChild(filterContainer);
  container.appendChild(projectsGrid);
  projects.appendChild(container);

  // Load projects
  try {
    allProjects = await loadProjects();
    renderProjects(projectsGrid, allProjects);
    createFilterButtons(filterContainer, allProjects);
  } catch (error) {
    console.error('Error loading projects:', error);
    projectsGrid.innerHTML = '<p>프로젝트를 불러오는 중 오류가 발생했습니다.</p>';
  }

  return projects;
}

/**
 * Render projects in grid
 * @param {HTMLElement} container - Container element
 * @param {Array} projects - Array of project objects
 */
function renderProjects(container, projects) {
  container.innerHTML = '';

  if (projects.length === 0) {
    container.innerHTML = '<p class="no-projects">표시할 프로젝트가 없습니다.</p>';
    return;
  }

  projects.forEach((project) => {
    const card = createProjectCard(project);
    card.setAttribute('role', 'listitem');

    // Handle project card click event
    card.addEventListener('projectCardClick', (e) => {
      const { project: clickedProject } = e.detail;
      showProjectModal(clickedProject);
    });

    container.appendChild(card);
  });
}

/**
 * Create filter buttons
 * @param {HTMLElement} container - Filter container
 * @param {Array} projects - Array of all projects
 */
function createFilterButtons(container, projects) {
  const technologies = getUniqueTechnologies(projects);

  if (technologies.length === 0) {
    return; // No filters if no technologies
  }

  // All button
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = 'All';
  allBtn.setAttribute('data-filter', 'all');
  allBtn.addEventListener('click', () => handleFilterClick('all', container));
  container.appendChild(allBtn);

  // Technology buttons
  technologies.forEach((tech) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = tech;
    btn.setAttribute('data-filter', tech.toLowerCase());
    btn.addEventListener('click', () => handleFilterClick(tech.toLowerCase(), container));
    container.appendChild(btn);
  });
}

/**
 * Handle filter button click
 * @param {string} filter - Filter value
 * @param {HTMLElement} filterContainer - Filter container
 */
function handleFilterClick(filter, filterContainer) {
  currentFilter = filter;

  // Update active button
  filterContainer.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    }
  });

  // Filter and render projects
  const filteredProjects = filterProjectsByTechnology(allProjects, filter);
  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    renderProjects(projectsGrid, filteredProjects);
  }
}

/**
 * Show project modal
 * @param {Object} project - Project object
 */
function showProjectModal(project) {
  // Import modal components dynamically
  import('../../components/ProjectModal/projectModal.js').then((module) => {
    const { createProjectModal, openModal } = module;
    const modal = createProjectModal(project);
    openModal(modal);
  });
}