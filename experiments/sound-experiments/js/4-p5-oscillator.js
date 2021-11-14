/**
Learn how to use p5 oscillator
Lam Ky Anh Do

Experimenting with sound and p5 oscillator
No need for audio
*/

"use strict";

let oscillator; // To store our oscillator
let angle = 0; // Set angle for sinAngle oscillator
let t = 0 // Set timestamp for conrolled noise

function setup() {
  createCanvas(500, 500);
  userStartAudio();

  // Create a new oscillator at 440Hz with a sine waveform
  oscillator = new p5.Oscillator(440, `sine`);

  // Different pitch when changing type
  //oscillator = new p5.Oscillator(440, `triangle`);
  //oscillator = new p5.Oscillator(440, `sawtooth`);
  //oscillator = new p5.Oscillator(440, `square`);

  // Different pitch when changing frequency in terms of low voice and high pitchy voice
  //oscillator = new p5.Oscillator(110, `sine`);
  //oscillator = new p5.Oscillator(440, `sine`);

  // HIGH PITCH FREQUENCY
  //oscillator.amp(0.1);

  // Oscillating soung using SinAngle
  oscillator.amp(0.2);
}

function draw() {
  background(0);

  // Make alien sounds
  //let newFreq = map(mouseY, height, 0, 0, 880);
  //oscillator.freq(newFreq);
  //let newAmp = map(mouseX, 0, width, 0, 1);
  //oscillator.amp(newAmp);

  // HIGH PITCH FREQUENCY
  // let newFreq = map(mouseY, height, 0, 20, 20000);
  // oscillator.freq(newFreq);
  //
  // push();
  // textSize(32);
  // textAlign(LEFT, CENTER);
  // fill(255);
  // text(newFreq, 100, height / 2);
  // pop();

  // Oscillating soung using SinAngle
  //let sinAngle = sin(angle);
  //let sinAngle = cos(angle); // about the same as sin
  //let sinAngle = tan(angle); // intriguing sound (jump up and down)
  //let newFreq = map(sinAngle, -1, 1, 440, 880);
  //oscillator.freq(newFreq);

  // slow (heartbeat)
  //angle += 0.1;
  // a bit fast
  //angle += 0.5;
  // fast
  //angle += 1;
  // very fast
  //angle += 1.5;

  // High pitch random noise
  //let r = random(0, 1);
  //let newFreq = map(r, 0, 1, 440, 880);
  //oscillator.freq(newFreq);

  // High pitch controlled noise
  let noiseValue = noise(t);
  let newFreq = map(noiseValue, 0, 1, 440, 880);
  oscillator.freq(newFreq);

  t += 0.1;
}

// mousePressed() starts our sine wave oscillator
function mousePressed() {
  oscillator.start();
}

// mouseReleased() stops our sine wave oscillator
function mouseReleased() {
  oscillator.stop();
}