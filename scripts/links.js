document.addEventListener('DOMContentLoaded', function () {
  fetch('data/links.json')
      .then(response => response.json())
      .then(data => {
          const learningActivitiesList = document.querySelector('.section2-ul');
          data.weeks.forEach(week => {
              const listItem = document.createElement('li');
              const weekLink = document.createElement('a');
              weekLink.textContent = week.week + ':';
              listItem.appendChild(weekLink);
              week.links.forEach(link => {
                  const activityLink = document.createElement('a');
                  activityLink.textContent = link.title;
                  activityLink.href = link.url;
                  activityLink.classList.add('card-links');
                  listItem.appendChild(activityLink);
                  listItem.appendChild(document.createTextNode(' | '));
              });
              learningActivitiesList.appendChild(listItem);
          });
      })
      .catch(error => console.error('Error fetching learning activities:', error));
});
