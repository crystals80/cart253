// Made a separate js file for audio so that it is easier to find audio and its code

// Set up functions that plays audio on the chosen states/mini games/screens
// SFX = abbreviation for sound effect (just for the comments)

// Play SFX audio for title and complete screens
function playAudio1() {
  // If bubblySFX isn't playing then play and loop it over and over, and play/loop bgAudio1 on the same time
  if (!bubbly.isPlaying() && !bgAudio1.isPlaying()) {
    bubbly.setVolume(0.3); // Lower SFX volume from 1 to 0.3
    bubbly.loop(); // Loop SFX to make a continuous audio
    bgAudio1.setVolume(0.32); // Lower background music from 1 to 0.32 in order to hear a bit of the SFX
    bgAudio1.loop(); // Replay background music after it ends
  }
}

// Play SFX and audio for minigame1
function playAudio2() {
  // If crunchSFX isn't playing then play and loop it over and over, and play/loop bgAudio1 on the same time
  if (!crunch.isPlaying() && mouseIsPressed == true) {
    crunch.play(); // Play crunchSFX only once -> when it is clicked
  }
  if (!bgAudio2.isPlaying()) {
    bgAudio2.setVolume(0.32); // Lower background music from 1 to 0.32 in order to hear the SFX
    bgAudio2.play(); // Play background music once since there is a timer -> both background music and timer last for 30 seconds
  }
}

// Play audio for gameover screens
function playAudio3() {
  if (!ohNo1.isPlaying()) {
    ohNo1.setVolume(0.5); //Lower background music from 1 to 0.5 in order to hear a bit of the SFX
    ohNo1.loop(); // Replay background music after it ends
  }
}