document.addEventListener('DOMContentLoaded', function() {
  const footerParagraph = document.getElementById('footer');
  const lastModifiedParagraph = document.querySelector('.lastModified');

  // current year
  const currentYear = new Date().getFullYear();

  // last modified date
  const lastModified = document.lastModified;

  // Update the placeholder with the current year
  document.getElementById("currentYearPlaceholder").textContent = currentYear;

  // Set content in footer
  footerParagraph.textContent = `©${currentYear} | Treasure Tambwanaye | South Africa`;
  lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;
});

const darkMode = () => {
  const headerThemeToggleBtn = document.getElementById('header-theme-toggle');
  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');

  const theme = localStorage.getItem('theme');

  // on mount
  theme && document.body.classList.add(theme);

  // handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

    // Events
    headerThemeToggleBtn.addEventListener('click', handleThemeToggle);
    mobileThemeToggleBtn.addEventListener('click', handleThemeToggle);
    };

const mobileNav = () => {

  const headerBtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
  // state
  let isMobileNavOpen = false;
  
  headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });
  
  // Events
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.style.overflowY = 'auto';
    });
  });
};

darkMode();
mobileNav();
