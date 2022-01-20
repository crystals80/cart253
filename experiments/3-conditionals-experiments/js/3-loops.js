/**
Experimenting with conditionals
Lam Ky Anh Do

*/

let catepillar = {
  x: 100,
  y: 250,
  segmentSize: 50,
};


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  noStroke();
  fill(100, 200, 100);

  let x = catepillar.x;
  let segmentsDrawn = 0;

  ellipse(catepillar.x, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 40, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 80, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 120, catepillar.y, catepillar.segmentSize);
  // ellipse(catepillar.x + 160, catepillar.y, catepillar.segmentSize);

  //To avoid repeating same lengthy code (above)
  ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40
  ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40
  ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40
  ellipse(x, catepillar.y, catepillar.segmentSize);
  x = x + 40 * /

  //While Loop
  /*let numSegments = 5;

  while (segmentsDrawn < numSegments) {
    ellipse(x, catepillar.y, catepillar.segmentSize);
    x = x + 40;
    //segmentDrawn += 1;
    segmentDrawn++; //same as above
  }*/

  // For Loop
  let numSegments = 10;

  //for (let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++) {
  for (let i = 0; i < numSegments; i++) { // i = increment
    ellipse(x, catepillar.y, catepillar.segmentSize);
    x = x + 40;
  }


}