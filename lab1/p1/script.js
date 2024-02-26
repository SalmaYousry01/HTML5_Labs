document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('myVideo');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const muteButton = document.getElementById('muteButton');
    const fullScreenButton = document.getElementById('fullScreenButton');
    const speedRange = document.getElementById('speedRange');
    const speedDisplay = document.getElementById('speedDisplay');
    const currentTimeSpan = document.getElementById('currentTime');
    const durationSpan = document.getElementById('duration');
    const seekBar = document.getElementById('seekBar');

    playButton.addEventListener('click', function () {
        video.play();
    });

    pauseButton.addEventListener('click', function () {
        video.pause();
    });


    muteButton.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = "Mute";
        } else {
            video.muted = true;
            muteButton.textContent = "Unmute";
        }
    });

    fullScreenButton.addEventListener('click', function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    });

    speedRange.addEventListener('input', function () {
        const speed = parseFloat(speedRange.value);
        video.playbackRate = speed;
        speedDisplay.textContent = `${speed}x`;
    });


    video.addEventListener('timeupdate', function () {
        currentTimeSpan.textContent = formatTime(video.currentTime);
        durationSpan.textContent = formatTime(video.duration);
        const currentTimePercentage = (video.currentTime / video.duration) * 100;
        seekBar.value = currentTimePercentage;
    });


    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    seekBar.addEventListener('input', function () {
        const seekTime = (video.duration * seekBar.value) / 100;
        video.currentTime = seekTime;
    });
});