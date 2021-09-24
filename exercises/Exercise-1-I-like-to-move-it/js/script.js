/**
Exercise 1: I like to move it!
Lam Ky Anh Do

Exercise for class 3: Understanding and playing with variables
*/

"use strict";

let backgroundShade = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);

}


function draw() {

  background(backgroundShade);
  backgroundShade = backgroundShade + 1;

}