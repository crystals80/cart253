/**
Activity 2: Draw an Alien
Lam Ky Anh Do

Draw an alien on canvas
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

  // Create background
  createCanvas(640,480);
  background('pink');
  noStroke();

  // Draw the body
  fill('gray');
  ellipse(320,480,300,200);

  // Draw the head
  fill(100);
  ellipse(320,240,250,400);

  // Draw the eyes
  fill(0);
  ellipse(250,240,80,200);
  ellipse(390,240,80,200);

  // Draw the nostrils
  ellipse(300,350,10,10);
  ellipse(340,350,10,10);

  // Draw the mouth
  ellipse(320,420,25,25);



  /*stroke("red");
  strokeWeight(5);
  rectMode(CENTER);
  rect(320,390,100,25);*/




}


/**
Description of draw()
*/
function draw() {

}
