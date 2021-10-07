/**
Learning how to use variables
Lam Ky Anh Do

Experimenting with p5's to use variables to create interactivity of shapes, colours and objects
**/

"use strict";

function setup() {

  // Create canvas
  createCanvas(500, 500);
}

function draw() {

  background(255, 220, 220);

  // Limited colours
  //background(mouseX, mouseY, 0)

  // A bit more colours
  background(mouseX, mouseY, mouseY / 2);

  rectMode(CENTER);
  //rect(250, 250, 100, 100);

  // Rect stays in mid of any canvas
  rect(width / 2, height / 2, 100, 100);

  // Mouse with rect following it
  rect(mouseX, mouseY, 100, 100);

  // Mouse with rect following opp side
  //rect(mouseY, mouseX, 100, 100);

  // Mouse moves and changes size of rect
  //rect(250, 250, mouseX, mouseY);


}