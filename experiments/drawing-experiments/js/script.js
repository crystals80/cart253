/**
Drawing Shapes
Lam Ky Anh Do

Experimenting with p5's drawing and colour functions
**/

"use strict";


/**
Description of preload
**/
function preload() {

}


/**
Description of setup
**/
function setup() {

  // Create background
  createCanvas(500,500);
  /*color: red,green,blue,alpha aka transparency)*/
  background(190,84,224);
  /*rect(x, y, w, h,)*/

  // Draw yellow squares
  stroke(227,227,227);
  rectMode(CENTER);
  fill(255,255,0,100);
  rect(450,450,100,100);
  fill(255,255,0,175);
  rect(450,450,75,75);
  fill(255,255,0,255);
  rect(450,450,50,50);

  // Draw gradient purple ellipses
  ellipseMode(CORNER);
  fill('#EEBAFF');
  ellipse(-50,-50,500,500);
  fill('#D883F2');
  ellipse(-50,-50,400,400);
  fill('#BE54E0');
  ellipse(-50,-50,300,300);
  fill("#A92ED2");
  ellipse(-50,-50,200,200);
  fill('#950BC2');
  ellipse(-50,-50,100,100);

  // Create a gradient yellow cone
  noStroke();
  ellipseMode(CORNER);
  fill('rgba(255,255,32,100)');
  ellipse(242,325,100,100);
  fill('rgba(230,230,0,90)');
  ellipse(242,325,80,80);
  fill('rgba(191,191,25,75)');
  ellipse(242,325,60,60);
  fill('rgba(140,140,18,55)');
  ellipse(242,325,40,40);
  fill('rgba(77,77,10,30)');
  ellipse(242,325,20,20);

  // Create a gradient purple cone
  noStroke();
  ellipseMode(CORNER);
  fill(127,0,200);
  ellipse(325,243,100,100);
  fill(137,0,210);
  ellipse(325,243,80,80);
  fill(147,0,220);
  ellipse(325,243,60,60);
  fill(157,0,230);
  ellipse(325,243,40,40);
  fill(167,0,240);
  ellipse(325,243,20,20);

  // Draw nose
  stroke(227,227,227);
  line(375,375,400,400);
  stroke('yellow');
  strokeWeight(10);
  point(376,376);

  /*rect(10,10,240,240);*/
  /*line(500,0,0,500);
  ellipse(250,250,100,100);*/

}


/**
Description of draw()
*/
function draw() {

}
