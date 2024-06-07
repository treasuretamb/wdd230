document.addEventListener('DOMContentLoaded', function() {
  // Function to update the current year and last modified date in the footer
  const updateFooter = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYearPlaceholder').textContent = currentYear;

    const lastModified = document.lastModified;
    const lastModifiedElement = document.querySelector('.lastModified');
    if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    }
  };

  // Function to fetch weather forecast data
  const fetchWeatherData = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Johannesburg&appid=e61d2f95daaf18002300230b3de6ec56&units=metric')
    .then(response => response.json())
    .then(data => {
      const weatherCard = document.getElementById('weather');
      weatherCard.innerHTML = `<p>Current Weather: ${data.list[0].weather[0].description}</p>`;
      for (let i = 1; i <= 3; i++) {
        const forecast = data.list[i];
        weatherCard.innerHTML += `<p>Forecast ${i} : ${forecast.weather[0].description}, Temperature: ${forecast.main.temp}°C</p>`;
      }
    })
    .catch(error => console.error('Error fetching weather data:', error));
  };

  // Function to fetch member data from JSON file
  const fetchMemberData = () => {
    fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
      const qualifiedMembers = data.members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
      const spotlightMembers = getRandomMembers(qualifiedMembers, 2, 3);

      spotlightMembers.forEach(member => {
        const spotlightAd = document.createElement('div');
        spotlightAd.classList.add('spotlight-ad');

        const memberName = document.createElement('h4');
        memberName.textContent = member.name;

        const memberAddress = document.createElement('p');
        memberAddress.textContent = member.address;

        const memberWebsite = document.createElement('p');
        memberWebsite.textContent = member.website;

        spotlightAd.appendChild(memberName);
        spotlightAd.appendChild(memberAddress);
        spotlightAd.appendChild(memberWebsite);

        document.getElementById('home-spotlight').appendChild(spotlightAd);
      });
    })
    .catch(error => console.error('Error fetching member data:', error));
  };

  // Function to randomly select members
  const getRandomMembers = (membersArray, minCount, maxCount) => {
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    const selectedMembers = [];
    while (selectedMembers.length < count) {
      const randomIndex = Math.floor(Math.random() * membersArray.length);
      if (!selectedMembers.includes(membersArray[randomIndex])) {
        selectedMembers.push(membersArray[randomIndex]);
      }
    }
    return selectedMembers;
  };

  // Function to check and display banner
  const displayBanner = () => {
    const currentDate = new Date();
    const banner = document.getElementById('chamber-meet-banner');
    if (currentDate.getDay() >= 1 && currentDate.getDay() <= 3) {
      banner.style.display = 'block';
      document.getElementById('close-banner-btn').addEventListener('click', function() {
        banner.style.display = 'none';
      });
    } else {
      banner.style.display = 'none';
    }
  };

  // Function to toggle dark mode
  const darkMode = () => {
    const headerThemeToggleBtn = document.getElementById('header-theme-toggle');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');

    const handleThemeToggle = () => {
      document.body.classList.toggle('light-mode');
      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
        document.body.removeAttribute('class');
      }
    };

    headerThemeToggleBtn.addEventListener('click', handleThemeToggle);
    mobileThemeToggleBtn.addEventListener('click', handleThemeToggle);
  };

  // Function for mobile navigation
  const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');

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
  };

  // Call functions
  updateFooter();
  fetchWeatherData();
  fetchMemberData();
  displayBanner();
  darkMode();
  mobileNav();
});

