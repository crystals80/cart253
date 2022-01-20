/**
Polymorphism
Lam Ky Anh Do

Experimenting with p5 on how to use polymorphism (ability of an object to take on many forms = Parent class & classes)
*/

// vehicle[] replaces cars[] & motorcycles[] as parent class
let vehicles = [];
let numCars = 10;
let numMotocycles = 10;

"use strict";

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < numCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y);
    vehicles.push(car);
  }

  for (let i = 0; i < numMotocycles; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y);
    vehicles.push(motorcycle);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < vehicles.length; i++) {
    let vehicle = vehicles[i];
    vehicle.move();
    vehicle.wrap();
    vehicle.display();
  }
}