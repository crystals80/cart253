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
  background('#FFD9FF');
  noStroke();

  // Draw neck
  ellipseMode(CENTER);
  fill('#CCB5FB');
  ellipse(330,400,50,200);
  fill('#5C38E4');
  ellipse(335,315,30,35);
  fill('#FFD9FF');
  ellipse(300,400,50,200);
  fill('#5C38E4');
  ellipse(320,320,30,35);

  // Draw head
  fill('#CCB5FB');
  ellipse(300,250,125,125);
  ellipseMode(CORNER);
  ellipse(235,185,115,115);
  ellipse(235,180,113,113);
  ellipse(233,175,105,105);
  ellipse(232,170,85,85);

  // Draw antenna
  noFill();
  stroke('#CCB5FB');
  strokeWeight(5);
  curve(262, 187, 250, 135, 250, 172, 282, 266);
  noStroke();
  fill('#5C38E4');
  ellipse(245,122,10,15)
  fill('#CCB5FB');
  ellipse(240,170,40,40);

  // Draw eye
  fill(255);
  noStroke();
  strokeWeight(1);
  ellipse(250,180,70,70);
  fill('#8D50DB')
  ellipse(250,190,50,50);

  // Draw mouth
  noFill();
  stroke('#8D50DB');
  arc(250, 175, 105, 105, 120, HALF_PI, PI);

  // Draw body
  noFill();
  strokeWeight(30);
  stroke('#5C38E4');
  beginShape();
  curveVertex(550,148);
  curveVertex(498,160);
  curveVertex(463,198);
  curveVertex(489,255);
  curveVertex(400,299);
  curveVertex(600,500);
  curveVertex(290,480);
  curveVertex(290,375);
  curveVertex(180,320);
  curveVertex(140,264);
  curveVertex(120,250);
  curveVertex(90,151);
  endShape();

  stroke('#CCB5FB');
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

  noStroke();
  strokeWeight(1);
  fill('#AD44DF');
  beginShape();
  curveVertex(394,551);
  curveVertex(394,551);
  curveVertex(388,409);
  curveVertex(291,407);
  curveVertex(302,561);
  curveVertex(302,561);
  endShape();

  strokeWeight(25);
  stroke('#93E9FA')
  point(388,409);
  point(357,422);
  point(322,421);
  point(291,407);

  // Draw mini-alien

  // Draw body
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER);
  fill('white');
  strokeWeight(1);
  fill('#4482F3');
  rect(140,220,20,100);
  fill('#FF60E4');
  ellipse(140,190,60,60);
  fill('#4482F3');
  ellipse(121,190,16,32);
  ellipse(159,190,16,32);
  stroke('#FF60E4');
  line(130,270,120,280);
  stroke(255);
  line(150,270,160,280);

  // Draw other parts
  stroke('#EE84FF');
  strokeWeight(3)
  line(520,310,540,320);
  strokeWeight(3)
  line(518,143,523,146);
  strokeWeight(10);
  ellipse(500,93,10,2);
  stroke('#8772FD');
  strokeWeight(10)
  point(547,305);
  strokeWeight(3)
  line(530,160,560,140);
  strokeWeight(3)
  line(500,110,505,130);
  stroke(255)
  strokeWeight(10)
  point(532,125);

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
