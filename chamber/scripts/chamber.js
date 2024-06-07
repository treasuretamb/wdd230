// Function to update the current year and last modified date in the footer
document.addEventListener('DOMContentLoaded', function() {
  // Update the current year
  const currentYear = new Date().getFullYear();
  document.getElementById('currentYearPlaceholder').textContent = currentYear;

  // Update the last modified date
  const lastModified = document.lastModified;
  const lastModifiedElement = document.querySelector('.lastModified');
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
  }
});

    // Fetch weather data from OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=e61d2f95daaf18002300230b3de6ec56&units=metric')
    .then(response => response.json())
    .then(data => {
      // Display weather information wherever you want in your HTML
      document.getElementById('weather').innerText = `Temperature: ${data.main.temp}°C, Description: ${data.weather[0].description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));


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
