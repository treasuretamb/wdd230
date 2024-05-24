const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather';

async function apiFetch() {
  try {
    const response = await fetch(`${url}?lat=49.75&lon=6.64&units=imperial&appid=efb59de9f76843d4a05f2fe25b408538`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data); 
    displayResults(data);
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
  }
}

apiFetch();

  function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
