// Play a laser sound when a target is clicked.

document.addEventListener("DOMContentLoaded", function () {
	var links = document.querySelectorAll(".wb-link");
	var audio = document.getElementById("laserfire");

	links.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();

			audio.currentTime = 0;
			audio.play();

			setTimeout(function () {
				window.location.href = link.href;
			}, 500);
		});
	});
});

// Play ambient noise when the cockpit is clicked.

document.addEventListener("DOMContentLoaded", function () {
	var image = document.getElementById("cockpit");
	var audio = document.getElementById("bg-noise");
	var isAudioPlaying = false;

	image.addEventListener("click", function () {
		if (!isAudioPlaying) {
			audio.play();
			isAudioPlaying = true;
		} else {
			audio.pause();
			audio.currentTime = 0;
			isAudioPlaying = false;
		}
	});
});
