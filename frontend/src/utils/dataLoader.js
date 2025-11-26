/**
 * Data Loader Utility
 * Loads JSON data files for the portfolio website
 */

// Import JSON files directly (Vite supports JSON imports)
import personalInfoData from '../data/personal-info.json';
import projectsData from '../data/projects.json';
import skillsData from '../data/skills.json';
import contactData from '../data/contact.json';
import aboutData from '../data/about.json';

/**
 * Load personal info data
 * @returns {Promise<Object>} Personal information object
 */
export async function loadPersonalInfo() {
  return Promise.resolve(personalInfoData);
}

/**
 * Load projects data
 * @returns {Promise<Array>} Array of project objects
 */
export async function loadProjects() {
  return Promise.resolve(projectsData);
}

/**
 * Load skills data
 * @returns {Promise<Array>} Array of skill objects
 */
export async function loadSkills() {
  return Promise.resolve(skillsData);
}

/**
 * Load contact info data
 * @returns {Promise<Object>} Contact information object
 */
export async function loadContactInfo() {
  return Promise.resolve(contactData);
}

/**
 * Load about content data
 * @returns {Promise<Object>} About content object
 */
export async function loadAboutContent() {
  return Promise.resolve(aboutData);
}
