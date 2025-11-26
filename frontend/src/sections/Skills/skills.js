/**
 * Skills Section Component
 * Displays skills organized by category
 */

import { loadSkills } from '../../utils/dataLoader.js';
import { createSkillBadge } from '../../components/SkillBadge/skillBadge.js';
import './skills.css';

/**
 * Group skills by category
 * @param {Array} skills - Array of skill objects
 * @returns {Object} Skills grouped by category
 */
function groupSkillsByCategory(skills) {
  const grouped = {
    language: [],
    framework: [],
    tool: [],
    platform: [],
    other: [],
  };

  skills.forEach((skill) => {
    const category = skill.category || 'other';
    if (grouped[category]) {
      grouped[category].push(skill);
    } else {
      grouped.other.push(skill);
    }
  });

  // Remove empty categories
  Object.keys(grouped).forEach((key) => {
    if (grouped[key].length === 0) {
      delete grouped[key];
    }
  });

  return grouped;
}

/**
 * Get category label in Korean
 * @param {string} category - Category name
 * @returns {string} Korean label
 */
function getCategoryLabel(category) {
  const labels = {
    language: '프로그래밍 언어',
    framework: '프레임워크 & 라이브러리',
    tool: '도구',
    platform: '플랫폼',
    other: '기타',
  };
  return labels[category] || category;
}

/**
 * Create Skills section
 * @returns {HTMLElement} Skills section element
 */
export async function createSkills() {
  const skills = document.createElement('section');
  skills.className = 'skills';
  skills.id = 'skills';

  const container = document.createElement('div');
  container.className = 'container';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '기술 스택';

  const skillsContent = document.createElement('div');
  skillsContent.className = 'skills-content';

  // Loading state
  skillsContent.innerHTML = '<p>기술 스택을 불러오는 중...</p>';

  container.appendChild(title);
  container.appendChild(skillsContent);
  skills.appendChild(container);

  // Load skills
  try {
    const allSkills = await loadSkills();
    const groupedSkills = groupSkillsByCategory(allSkills);
    renderSkills(skillsContent, groupedSkills);
  } catch (error) {
    console.error('Error loading skills:', error);
    skillsContent.innerHTML = '<p>기술 스택을 불러오는 중 오류가 발생했습니다.</p>';
  }

  return skills;
}

/**
 * Render skills by category
 * @param {HTMLElement} container - Container element
 * @param {Object} groupedSkills - Skills grouped by category
 */
function renderSkills(container, groupedSkills) {
  container.innerHTML = '';

  if (Object.keys(groupedSkills).length === 0) {
    container.innerHTML = '<p class="no-skills">표시할 기술 스택이 없습니다.</p>';
    return;
  }

  const categoriesContainer = document.createElement('div');
  categoriesContainer.className = 'skills-categories';

  Object.entries(groupedSkills).forEach(([category, categorySkills]) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';

    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'category-title';
    categoryTitle.textContent = getCategoryLabel(category);

    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'skills-grid';

    categorySkills.forEach((skill) => {
      const skillBadge = createSkillBadge(skill);
      skillsGrid.appendChild(skillBadge);
    });

    categoryDiv.appendChild(categoryTitle);
    categoryDiv.appendChild(skillsGrid);
    categoriesContainer.appendChild(categoryDiv);
  });

  container.appendChild(categoriesContainer);
}