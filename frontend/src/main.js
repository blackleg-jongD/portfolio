// Main entry point for the portfolio website
import './styles/global.css';
import { createNavigation, initNavigation } from './components/Navigation/navigation.js';
import './components/Navigation/navigation.css';
import { createHero } from './sections/Hero/hero.js';
import './sections/Hero/hero.css';
import { createAbout } from './sections/About/about.js';
import './sections/About/about.css';
import { createProjects } from './sections/Projects/projects.js';
import './sections/Projects/projects.css';
import { createSkills } from './sections/Skills/skills.js';
import './sections/Skills/skills.css';
import { createContact } from './sections/Contact/contact.js';
import './sections/Contact/contact.css';
import './components/SkillBadge/skillBadge.css';
import './components/SocialLinks/socialLinks.css';
import './components/ProjectModal/projectModal.css';
import './components/ProjectCard/projectCard.css';
import { createFooter } from './components/Footer/footer.js';
import './components/Footer/footer.css';
import { loadPersonalInfo, loadContactInfo } from './utils/dataLoader.js';

/**
 * Initialize the portfolio website
 */
async function init() {
  const app = document.getElementById('app');
  if (!app) {
    console.error('App element not found');
    return;
  }

  try {
    // Load data
    const [personalInfo, contactInfo] = await Promise.all([
      loadPersonalInfo(),
      loadContactInfo(),
    ]);

    // Create header with navigation
    const header = document.createElement('header');
    header.className = 'header';
    const navigation = createNavigation();
    header.appendChild(navigation);
    app.appendChild(header);

    // Create main content wrapper for skip link
    const mainContent = document.createElement('main');
    mainContent.id = 'main-content';
    mainContent.setAttribute('role', 'main');

    // Create Hero section
    const hero = createHero(personalInfo);
    mainContent.appendChild(hero);

    // Create About section (async)
    const about = await createAbout();
    mainContent.appendChild(about);

    // Create Projects section (async)
    const projects = await createProjects();
    mainContent.appendChild(projects);

    // Create Skills section (async)
    const skills = await createSkills();
    mainContent.appendChild(skills);

    // Create Contact section (async)
    const contact = await createContact();
    mainContent.appendChild(contact);

    app.appendChild(mainContent);

    // Create Footer
    const footer = createFooter(contactInfo);
    app.appendChild(footer);

    // Initialize navigation with active state tracking
    initNavigation();

    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    // Update header on scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });

    console.log('Portfolio website initialized successfully');
  } catch (error) {
    console.error('Error initializing portfolio website:', error);
    app.innerHTML = '<div class="error">웹사이트를 로드하는 중 오류가 발생했습니다.</div>';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}