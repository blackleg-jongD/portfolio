/**
 * Navigation Component
 * Handles smooth scrolling navigation between sections
 * Includes mobile hamburger menu
 */

export function createNavigation() {
  const nav = document.createElement('nav');
  nav.className = 'navigation';
  nav.setAttribute('aria-label', '메인 네비게이션');

  // Mobile menu button
  const menuButton = document.createElement('button');
  menuButton.className = 'mobile-menu-button';
  menuButton.setAttribute('aria-label', '메뉴 열기');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = `
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
  `;

  const navList = document.createElement('ul');
  navList.className = 'nav-list';

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  navItems.forEach((item) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${item.id}`;
    link.textContent = item.label;
    link.className = 'nav-link';
    link.setAttribute('data-section', item.id);

    // Smooth scroll on click
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        nav.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });

    listItem.appendChild(link);
    navList.appendChild(listItem);
  });

  // Toggle mobile menu
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && nav.classList.contains('menu-open')) {
      nav.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  nav.appendChild(menuButton);
  nav.appendChild(navList);

  return nav;
}

/**
 * Initialize navigation with active state tracking
 */
export function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Update active nav link on scroll
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Initial call
}