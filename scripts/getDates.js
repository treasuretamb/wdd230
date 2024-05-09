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