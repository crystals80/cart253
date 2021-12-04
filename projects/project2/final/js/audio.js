// Made a separate js file for audio so that it is easier to find audio and its code

// Set up functions that plays audio on the chosen states/mini games/screens
// SFX = abbreviation for sound effect (just for the comments)

// Play SFX audio for title screen
function playAudio1() {
  // If bubblySFX isn't playing then play and loop it over and over, and play/loop bgAudio1 on the same time
  if (!bubbly.isPlaying() && !bgAudio1.isPlaying()) {
    bubbly.setVolume(0.3); // Lower SFX volume from 1 to 0.3
    bubbly.loop(); // Loop SFX to make a continuous audio
    bgAudio1.setVolume(0.32); // Lower background music from 1 to 0.32 in order to hear a bit of the SFX
    bgAudio1.loop(); // Replay background music after it ends
  }
}


// AUDIO SETUP FOR MINI GAMES
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
// Play audio for minigame2
function playAudio3() {
  if (!bgAudio3.isPlaying()) {
    bgAudio3.setVolume(0.32); //Lower background music from 1 to 0.5 in order to hear a bit of the SFX
    bgAudio3.loop(); // Replay background music after it ends
  }
}
// Play audio for minigame3
function playAudio4() {
  // Same parameters as playAudio1() but different audio for SFX (waves replacing bubbly)
  if (!bgAudio4.isPlaying()) {
    bgAudio4.setVolume(0.32);
    bgAudio4.loop();
  }
}


// AUDIO SETUP FOR COMPLETE SCREENS
// Same parameters as playAudio1() for the 3 following functions just different audio
// Play audio for complete1 screen
function playAudio5() {
  if (!bubbly.isPlaying() && !yay1.isPlaying()) {
    bubbly.setVolume(0.3);
    bubbly.loop();
    yay1.setVolume(0.3);
    yay1.loop();
  }
}
// Play audio for complete2 screen
function playAudio6() {
  if (!bubbly.isPlaying() && !yay2.isPlaying()) {
    bubbly.setVolume(0.3);
    bubbly.loop();
    yay2.setVolume(0.32);
    yay2.loop();
  }
}
// Play audio for complete3 screen
function playAudio7() {
  if (!bubbly.isPlaying() && !yay3.isPlaying()) {
    bubbly.setVolume(0.3);
    bubbly.loop();
    yay3.setVolume(0.32);
    yay3.loop();
  }
}


// AUDIO SETUP FOR GAMEOVER SCREENS
// Play audio for gameover1 screen
function playAudio8() {
  if (!ohNo1.isPlaying()) {
    ohNo1.setVolume(0.5); //Lower background music from 1 to 0.5 in order to hear a bit of the SFX
    ohNo1.loop(); // Replay background music after it ends
  }
}
// Play audio for gameover2 screen
function playAudio9() {
  // Same if statement as playAudio8 but for ohNo2
  if (!ohNo2.isPlaying()) {
    ohNo2.setVolume(0.5);
    ohNo2.loop();
  }
}
// Play audio for gameover3 screen
function playAudio10() {
  // Same if statement as playAudio8 but for ohNo3
  if (!ohNo3.isPlaying() && !waves.isPlaying()) {
    waves.setVolume(0.05);
    waves.loop();
    ohNo3.setVolume(0.3);
    ohNo3.loop();
  }
}
// Play audio for ending screen
function playAudio11() {
  // Play and loop audio with no modification to its volume
  if (!end.isPlaying()) {
    end.loop();
  }
}

// FUNCTION TO STOP LOOPING AUDIOS
// Stop bubblySFX because simply putting bubbly.stop() in the if statements of draw() function did not work
function stopBubbly() {
  // If bubblySFX is playing, then stop playing it
  if (bubbly.isPlaying()) {
    bubbly.stop();
  }
}

function stopBgAudio3() {
  // Same if statement as stopBubbly but for bgAudio3
  if (bgAudio3.isPlaying()) {
    bgAudio3.stop();
  }
}

function stopBgAudio4() {
  // Same if statement as stopBubbly but for bgAudio4
  if (bgAudio4.isPlaying()) {
    bgAudio4.stop();
  }
}

function stopEnd() {
  // Same if statement as stopBubbly but for ending background audio
  if (end.isPlaying()) {
    end.stop();
  }
}