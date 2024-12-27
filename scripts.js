document.addEventListener('DOMContentLoaded', () => {
    // Slow down the video playback speed
    const video = document.querySelector('video');
    video.playbackRate = 1; // Adjust this value for slower or faster playback

    const intro = document.querySelector('.intro');
    const logoSpans = document.querySelectorAll('.logo');

    logoSpans.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add('active');
        }, (idx + 1) * 100);
    });

    setTimeout(() => {
        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);
        });

        setTimeout(() => {
            intro.classList.add('lift-up');
            const topBar = document.querySelector('.top-bar');
            topBar.style.display = 'flex'; // Show the top-bar immediately after intro animation completes
            intro.style.display = 'none'; // Hide the intro after animation
        }, 1000); // Adjust this delay to synchronize with the logo fade effect
    }, 1000); // Initial delay before starting the splash screen animation

    const splashScreen = document.querySelector('.splash-screen');
    splashScreen.classList.add('show'); // Reveal the splash screen immediately
});

// Hämta knappen och sökrutan
const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");

// Lägg till klickhändelse
searchBtn.addEventListener("click", () => {
  if (searchBar.classList.contains("hidden")) {
    searchBar.classList.remove("hidden");
    searchBar.classList.add("visible");
  } else {
    searchBar.classList.remove("visible");
    searchBar.classList.add("hidden");
  }
});
