const baseURL = "https://treasuretamb.github.io/wdd230/";
const linksURL = "https://treasuretamb.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const learningActivitiesList = document.querySelector('.section2-ul');
  learningActivitiesList.innerHTML = '';

  weeks.forEach(week => {
    const weekListItem = document.createElement('li');
    const weekLink = document.createElement('a');
    weekLink.href = baseURL + week.links[0].url;
    weekLink.innerHTML = `<b>${week.week}:</b>`;
    weekListItem.appendChild(weekLink);

    week.links.forEach(activity => {
      const activityLink = document.createElement('a');
      activityLink.className = 'card-links';
      activityLink.href = baseURL + activity.url;
      activityLink.textContent = activity.title;
      weekListItem.appendChild(activityLink);
      weekListItem.appendChild(document.createTextNode(' | '));
    });

    learningActivitiesList.appendChild(weekListItem);
  });
}

getLinks();
