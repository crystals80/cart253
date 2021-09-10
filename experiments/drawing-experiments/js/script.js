/**
Drawing Shapes
Lam Ky Anh Do

Template description of project!
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
  createCanvas(500,500);
  background(190,84,224);
  /*rect(x, y, w, h,)*/


  ellipseMode(CORNER);
  ellipse(-50,-50,500,500);
  ellipse(-50,-50,400,400);
  ellipse(-50,-50,300,300);
  ellipse(-50,-50,200,200);
  ellipse(-50,-50,100,100);

  ellipseMode(CORNER);
  ellipse(250,250,100,100);
  ellipse(250,250,80,80);
  ellipse(250,250,60,60);
  ellipse(250,250,40,40);
  ellipse(250,250,20,20);

  rectMode(CENTER);
  rect(250,250,100,100);
  rect(250,250,75,75);
  rect(250,250,50,50);

  point(250,250);
  /*rect(10,10,240,240);*/
  line(0,0,500,500);
  /*line(500,0,0,500);
  ellipse(250,250,100,100);*/

}


/**
Description of draw()
*/
function draw() {

}
