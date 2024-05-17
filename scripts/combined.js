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

// Check if the browser supports the 'loading' attribute
if ('loading' in HTMLIFrameElement.prototype) {
  // If supported, set the 'loading' attribute to 'lazy'
  document.getElementById('myMapIframe').loading = 'lazy';
};



  // Check if the visitor count exists in local storage
  if(localStorage.getItem('visitorCount')) {
    // If it exists, increment the count
    let count = parseInt(localStorage.getItem('visitorCount'));
    count++;
    localStorage.setItem('visitorCount', count);
  } else {
    // If it doesn't exist, set the count to 1
    localStorage.setItem('visitorCount', 1);
  }




    // Fetch weather data from OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=e61d2f95daaf18002300230b3de6ec56&units=metric')
    .then(response => response.json())
    .then(data => {
      // Display weather information wherever you want in your HTML
      document.getElementById('weather').innerText = `Temperature: ${data.main.temp}°C, Description: ${data.weather[0].description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));



  

  // Display the visitor count wherever you want in your HTML
  document.getElementById('visitorCount').innerText = localStorage.getItem('visitorCount');

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
