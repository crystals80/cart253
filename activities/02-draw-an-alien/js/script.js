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



  rectMode(CENTER);
  rect(320,480,50,300);

  // Draw neck
  ellipseMode(CENTER);
  ellipse(330,400,50,200);
  ellipse(335,320,30,35);
  fill('pink');
  ellipse(300,400,50,200);
  fill(255);
  ellipse(320,320,30,35);

  // Draw head
  fill('white');
  ellipse(300,250,125,125);
  ellipseMode(CORNER);
  ellipse(235,185,115,115);
  ellipse(235,180,113,113);
  ellipse(233,175,105,105);
  ellipse(232,170,85,85);

  // Draw antenna
  noFill();
  stroke(255);
  strokeWeight(5);
  curve(262, 187, 250, 135, 250, 172, 282, 266);
  noStroke();
  fill('white');
  ellipse(245,122,10,15)
  ellipse(240,170,40,40);

  // Draw eye
  noFill();
  stroke(127);
  strokeWeight(1);
  ellipse(250,180,70,70);
  fill(127)
  ellipse(250,190,50,50);

  // Draw mouth
  noFill();
  arc(250, 175, 105, 105, 120, HALF_PI, PI);

  // Draw body
  noFill();
  stroke('white');
  strokeWeight(30);
  beginShape();
  curveVertex(600,362);
  curveVertex(528,282);
  curveVertex(484,262);
  curveVertex(410,500);
  curveVertex(240,520);
  curveVertex(240,400);
  curveVertex(175,362);
  curveVertex(164,317);
  curveVertex(121,317);
  curveVertex(132,391);
  endShape();

  strokeWeight(25);
  point(394,551);
  point(388,409);
  point(291,407);
  point(302,561);
  strokeWeight(1);

  fill('white');
  beginShape();
  curveVertex(394,551);
  curveVertex(394,551);
  curveVertex(388,409);
  curveVertex(291,407);
  curveVertex(302,561);
  curveVertex(302,561);
  endShape();

  // Draw mini-alien
  stroke(127);
  ellipseMode(CENTER);
  fill('white');
  strokeWeight(1);
  rect(140,220,20,100);
  ellipse(140,190,60,60);
  ellipse(121,190,16,32);
  ellipse(159,190,16,32);
  line(130,270,120,280);
  line(150,270,160,280);

  stroke('white');
  strokeWeight(3)
  line(520,310,540,320);
  strokeWeight(10)
  point(547,305);

/*  // Create background
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
