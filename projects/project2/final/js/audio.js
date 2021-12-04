// Made a separate js file for audio so that it is easier to find audio and its code

// Set up function that plays audio on the chosen states/mini games/screens
function playAudio1() {
  // If bubblySFX isn't playing then play and loop it over and over, and play/loop bgAudio1 on the same time
  if (!bubbly.isPlaying() && !bgAudio1.isPlaying()) {
    bubbly.setVolume(0.3);
    bubbly.loop();
    bgAudio1.setVolume(0.32);
    bgAudio1.loop();
  }
}

function playAudio2() {
  // If crunchSFX isn't playing then play and loop it over and over, and play/loop bgAudio1 on the same time
  if (!crunch.isPlaying() && mouseIsPressed == true) {
    // crunch.setVolume(0.3);
    crunch.play();
  }
  if (!bgAudio2.isPlaying()) {
    bgAudio2.setVolume(0.32);
    bgAudio2.loop();
  }
}