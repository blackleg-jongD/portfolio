/**
 * Project Filter Utility
 * Handles filtering projects by technology stack
 */

/**
 * Filter projects by technology
 * @param {Array} projects - Array of project objects
 * @param {string} technology - Technology to filter by (empty string for all)
 * @returns {Array} Filtered array of projects
 */
export function filterProjectsByTechnology(projects, technology) {
  if (!technology || technology === 'all') {
    return projects;
  }

  return projects.filter((project) => {
    if (!project.technologies || !Array.isArray(project.technologies)) {
      return false;
    }
    return project.technologies.some(
      (tech) => tech.toLowerCase() === technology.toLowerCase()
    );
  });
}

/**
 * Get unique technologies from all projects
 * @param {Array} projects - Array of project objects
 * @returns {Array} Sorted array of unique technology names
 */
export function getUniqueTechnologies(projects) {
  const technologies = new Set();

  projects.forEach((project) => {
    if (project.technologies && Array.isArray(project.technologies)) {
      project.technologies.forEach((tech) => {
        technologies.add(tech);
      });
    }
  });

  return Array.from(technologies).sort();
}
