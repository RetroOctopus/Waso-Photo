// Find all image links
const imgLinks = document.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');

// Create an overlay element
const overlayEl = document.createElement('div');
overlayEl.classList.add('fullscreen-overlay');

// Create an image element for the fullscreen view
const imgFullEl = document.createElement('img');
imgFullEl.classList.add('fullscreen-image');

// Append the elements to the body
overlayEl.appendChild(imgFullEl);
document.body.appendChild(overlayEl);

// Add click event listener to all image links
imgLinks.forEach(function(imgLink) {
  const imgEl = imgLink.querySelector('img');

  imgLink.addEventListener('click', function(e) {
    e.preventDefault();

    // Set the source of the fullscreen image
    imgFullEl.src = imgEl.src;

    // Show the overlay
    overlayEl.style.display = 'flex'; // change 'block' to 'flex'

    // Add event listener to the overlay to hide it when clicked
    overlayEl.addEventListener('click', function() {
      // Hide the overlay
      overlayEl.style.display = 'none';
    });
  });
});
