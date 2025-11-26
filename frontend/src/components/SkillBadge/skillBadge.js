/**
 * Skill Badge Component
 * Displays a single skill with optional level indicator
 */

/**
 * Create a skill badge element
 * @param {Object} skill - Skill object from data
 * @returns {HTMLElement} Skill badge element
 */
export function createSkillBadge(skill) {
  const badge = document.createElement('div');
  badge.className = 'skill-badge';
  badge.setAttribute('data-skill-id', skill.id);

  // Skill name
  const name = document.createElement('span');
  name.className = 'skill-name';
  name.textContent = skill.name;

  badge.appendChild(name);

  // Level indicator (optional)
  if (skill.level) {
    const level = document.createElement('span');
    level.className = `skill-level skill-level-${skill.level}`;
    level.textContent = getLevelLabel(skill.level);
    level.setAttribute('aria-label', `숙련도: ${getLevelLabel(skill.level)}`);
    badge.appendChild(level);
  }

  // Custom color if available
  if (skill.color) {
    badge.style.setProperty('--skill-color', skill.color);
    badge.classList.add('has-color');
  }

  // Icon (if available)
  if (skill.icon) {
    const icon = document.createElement('i');
    icon.className = skill.icon;
    badge.insertBefore(icon, badge.firstChild);
  }

  return badge;
}

/**
 * Get level label in Korean
 * @param {string} level - Level name
 * @returns {string} Korean label
 */
function getLevelLabel(level) {
  const labels = {
    beginner: '초급',
    intermediate: '중급',
    advanced: '고급',
    expert: '전문가',
  };
  return labels[level] || level;
}
