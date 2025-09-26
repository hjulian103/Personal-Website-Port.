
// Anime.js on-scroll section entrance animation

// Play project video on hover and pause/reset on mouse leave
function enableVideoHoverPlay() {
	document.querySelectorAll('.video-preview video').forEach(video => {
		video.addEventListener('mouseenter', () => {
			video.play();
		});
		video.addEventListener('mouseleave', () => {
			video.pause();
			video.currentTime = 0;
		});
	});
}

// Call the function after DOM is loaded
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', enableVideoHoverPlay);
} else {
	enableVideoHoverPlay();
}


document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


//<!-- Light/Dark Mode Toggle -->



//<!-- Animated Typing Effect for Hero Section -->


// Animated text entrance for hero heading using anime.js (CDN global)



 