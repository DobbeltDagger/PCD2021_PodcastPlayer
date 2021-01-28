// import { p5 } from './libs/p5.js';
// import './libs/p5.js';
// const p5 = require('./libs/p5.js');
// none of the above are good!
import { curlNoise } from './functions.js';
import { Particle } from './Particle.js';

///////////////////////////////////////////////////////////
export function App() {

}


/*
////////////////////////////////////////////////////
// TESTING RUNNING p5 from here!
const particles = [];
const numberOfParticles = 400;
const noiseScale = 1.2e11;
const backgroundColor = `rgb(17, 10, 20)`;
const particleSize = 1.4;
const pickSpeed = () => random([0.2, 0.5, 0.5, 0.8, 1, 2]);
const bothDirections = true;

////////////////////////////////////////////////////
// p5 setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(backgroundColor);
  for (let i = 0; i < numberOfParticles; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  noiseDetail(8, 0.65);
  strokeCap(SQUARE);
  strokeWeight(particleSize);
  smooth();
}


////////////////////////////////////////////////////
// p5 draw function
function draw() {
  // What is this mousePressed? - I should get rid of that in this version!
  if (mouseIsPressed) particles[floor(random(particles.length - 1))] = new Particle(mouseX, mouseY, particles.length - 1);

  for (let i = 0; i < numberOfParticles; i++) {
    particles[i].move();
    particles[i].display();
  }
}

setup();
draw();
*/



///////////////////////////////////////////////////////////
App.prototype = {


  ///////////////////////////////////////////////////////////
  init: function() {
    console.log("App init was run")
    
    console.log("p5:", p5);
    console.log("player:", player);
    console.log("Particle:", Particle);
    
    // testing babel
    this.testPromise();

    // start sketch in bg


    // start Drawing()
    // this.draw();
  },


  ///////////////////////////////////////////////////////////
  draw: function() {
    // this just draws in a loop
    // requestAnimationFrame(draw);

    console.log("Drawing")
  },


  ///////////////////////////////////////////////////////////
  testPromise: async function() {
    await this.testingBabel()
      .then(response => console.log("Response:", response));
    console.log("testPromise awaited testingBabel function")
  },

  
  ///////////////////////////////////////////////////////////
  testingBabel: function() {
    // this works
    const test = () => {
      console.log("Arrow function is tested!");
    }
    let x = 0;
    return new Promise((resolve, reject) => {
      if (x > 0) {
        reject("x is not right");
      }
      else {
        resolve("this is a good x");
      }
    })
  },

}