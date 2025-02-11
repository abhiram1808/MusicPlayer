// Grab elements
const playPauseBtn = document.getElementById("playPauseBtn");
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const volumeControl = document.getElementById("volume");

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Update progress bar as the song plays
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;

    // Format time for current and total duration
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}`;

    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? "0" + durationSeconds : durationSeconds}`;
});

// Update audio time when progress bar is moved
progressBar.addEventListener("input", () => {
    const value = progressBar.value;
    audio.currentTime = (value / 100) * audio.duration;
});

// Volume control
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value / 100;
});

// Ensure duration display is updated when the audio is loaded
audio.addEventListener("loadeddata", () => {
    const durationMinutes = Math.floor(audio.duration / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    durationDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? "0" + durationSeconds : durationSeconds}`;
});
