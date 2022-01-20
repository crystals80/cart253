/**
Chains of Inheritance
Lam Ky Anh Do

Experimenting with p5 on how to use chains of inheritance (subclasses => Parent Class > Class > Subclass)
*/

let vehicles = [];
let numCars = 10;
let numMotocycles = 10;
let numSportsCars = 3;

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

  for (let i = 0; i < numSportsCars; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let sportscar = new SportsCar(x, y);
    vehicles.push(sportscar);
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