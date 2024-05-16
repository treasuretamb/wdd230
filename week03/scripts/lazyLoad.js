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

  // Lazy loading using Intersection Observer
  const lazyImages = document.querySelectorAll('img.lazy');
  
  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add('loaded');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that do not support Intersection Observer
    lazyImages.forEach(function(image) {
      image.src = image.dataset.src;
      image.classList.add('loaded');
    });
  }
});
