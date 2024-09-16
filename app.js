document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    hamburger.addEventListener('click', () => {
        sidebar.style.display = 'block'; 
        setTimeout(() => {
            sidebar.classList.add('open'); 
        }, 10); 
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open'); 
        setTimeout(() => {
            sidebar.style.display = 'none'; 
        }, 500); 
    });
});

document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// -------
function updateImageSrc() {
    const image = document.getElementById('aboutcaps');
    const mediaQuery = window.matchMedia('(max-width: 460px)');

    if (mediaQuery.matches) {
        // If the viewport is 460px or less, change the image src
        image.src = 'Images/MDot-about.svg';
    } else {
        // Otherwise, use the original image src
        image.src = 'Images/About-Banner.webp';
    }
}

// Call the function on page load
updateImageSrc();

// Add an event listener for window resize
window.addEventListener('resize', updateImageSrc);