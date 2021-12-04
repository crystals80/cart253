// Made a separate js file for audio so that it is easier to find audio and its code

// Set up function that plays audio on the chosen states/mini games/screens
function playAudio() {
  // If bubblySFX isn't playing then play and loop it over and over, and play bgAudio1 on the same time
  if (!bubbly.isPlaying() && !bgAudio1.isPlaying()) {
    bubbly.setVolume(0.3);
    bubbly.loop();
    bgAudio1.setVolume(0.32);
    bgAudio1.loop();
  }
}