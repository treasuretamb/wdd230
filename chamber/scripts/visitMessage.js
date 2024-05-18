document.addEventListener("DOMContentLoaded", function() {
  const visitMessageElement = document.getElementById('visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const now = new Date();
  const currentTime = now.getTime();

  if (!lastVisit) {
      visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const lastVisitTime = parseInt(lastVisit, 10);
      const timeDifference = currentTime - lastVisitTime;
      const oneDay = 24 * 60 * 60 * 1000;
      
      if (timeDifference < oneDay) {
          visitMessageElement.textContent = "Back so soon... Awesome!";
      } else {
          const daysDifference = Math.floor(timeDifference / oneDay);
          visitMessageElement.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
      }
  }

  localStorage.setItem('lastVisit', currentTime.toString());
});
