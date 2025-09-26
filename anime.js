
// Animate section cards only when they enter the viewport (IntersectionObserver)
window.addEventListener('DOMContentLoaded', function() {
	var sections = document.querySelectorAll('section');
	sections.forEach(function(section) {
		section.style.opacity = 0;
		section.style.transform = 'translateY(40px) scale(0.96)';
		section.style.willChange = 'transform, opacity, box-shadow';
	});

	if ('IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function(entries, obs) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					anime({
						targets: entry.target,
						opacity: [0, 1],
						translateY: [40, 0],
						scale: [0.96, 1],
						easing: 'easeOutExpo',
						duration: 900,
						complete: function() {
							entry.target.style.opacity = 1;
							entry.target.style.transform = 'none';
						}
					});
					obs.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });
		sections.forEach(function(section) {
			observer.observe(section);
		});
	} else {
		// Fallback for browsers without IntersectionObserver
		anime({
			targets: sections,
			opacity: [0, 1],
			translateY: [40, 0],
			scale: [0.96, 1],
			easing: 'easeOutExpo',
			duration: 900,
			delay: anime.stagger(180, {start: 300})
		});
	}

	// Remove JS hover animation for best performance; use only CSS for hover effects
// (No JS hover listeners)
});

// Animate the car along the SVG path using anime.js

