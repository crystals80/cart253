/**
Learn how to use p5 polysynth
Lam Ky Anh Do

Experimenting with sound and p5 polysynth
No need for audio
*/

"use strict";

let synth;
//let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `EB4`, `F5`]; // F-minor
let notes = [`F3`, `G3`, `Ab3`, `Bb3`, `C3`, `Db3`, `EB3`, `F4`]; // F-minor
//let notes = [`F2`, `G2`, `Ab2`, `Bb2`, `C2`, `Db2`, `EB2`, `F3`]; // F-minor
let currentNote = 0;

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  synth = new p5.PolySynth();
}

function draw() {
  background(0);
}

function mousePressed() {
  //synth.play(`C4`, 1, 0, 1);
  //synth.play(`D#3`, 1, 0, 1);

}

function keyPressed() {
  // Start the ghost player
  //setInterval(playRandomNote, 500);
  //setInterval(playRandomNote, 200); // faster
  setInterval(playRandomNote, 150); // even faster
}

function playRandomNote() {
  // Random notes
  //let randomNote = random(notes)
  //synth.play(randomNote, 1, 0, 0.25);

  // Note in order
  let note = notes[currentNote];
  synth.play(note, 1, 0, 0.4);

  currentNote += 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}