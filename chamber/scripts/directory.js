document.addEventListener('DOMContentLoaded', () => {
  const directoryMain = document.getElementById('directory');
  const gridViewButton = document.getElementById('grid');
  const listViewButton = document.getElementById('list');

  const toggleView = (view) => {
    if (view === 'list') {
      directoryMain.classList.add('list');
      const images = directoryMain.querySelectorAll('.member-card img');
      images.forEach(image => image.classList.add('hidden'));
    } else {
      directoryMain.classList.remove('list');
      const images = directoryMain.querySelectorAll('.member-card img');
      images.forEach(image => image.classList.remove('hidden'));
    }
  };

  gridViewButton.addEventListener('click', () => {
    toggleView('grid');
  });

  listViewButton.addEventListener('click', () => {
    toggleView('list');
  });

  fetch('data/members.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      directoryMain.innerHTML = data.members.map(member => `
        <div class="member-card ${member.name}">
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}">${member.website}</a>
          <p>${member.membershipLevel}</p>
        </div>
      `).join('');
    })
    .catch(error => console.error('Error loading member data:', error));
});
