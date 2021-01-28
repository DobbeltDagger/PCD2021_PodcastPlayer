(function () {
  'use strict';

  ///////////////////////////////////////////
  // run upon resize of screen
  const resize = () => {
    console.log("resize was run");
    
    var totalWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var totalHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    return { totalWidth, totalHeight };
  };

  // GLOBAL VARS
  // const particles = [];
  // const numberOfParticles = 400;
  // const noiseScale = 1.2e11;
  // const backgroundColor = `rgb(17, 10, 20)`;
  // const particleSize = 1.4;
  // const pickSpeed = () => random([0.2, 0.5, 0.5, 0.8, 1, 2]);
  // const bothDirections = true;


  ////////////////////////////////////////////////////
  class Particle {

    constructor(x, y) {
      this.prevPos = createVector(x, y);
      this.pos = createVector(x, y);
      this.speed = pickSpeed();
      this.speed *= (bothDirections && random() < 0.5) ? -1 : 1;
      this.changeColor();
    }
    
    /////////////////////////////////
    move() {
      this.prevPos = this.pos.copy();
      const direction = curlNoise(this.pos.x / noiseScale, this.pos.y / noiseScale);
      this.pos.add(direction.mult(this.speed));

      if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
        this.pos.x = random(width);
        this.pos.y = random(height);
        this.prevPos = this.pos.copy();
        this.changeColor();
      }
    }

    /////////////////////////////////
    display() {
      stroke(this.color);
      line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
    }

    /////////////////////////////////
    changeColor() {
      let alpha = random() ** 0.8 * random(random(140, 160), random(160, random(160, 255)));
      alpha = map(alpha, 0, 255, 0, 200);
      const weightings = [{
          chance: 0.36,
          color: color(103, 197, 218, alpha)
        },
        {
          chance: 0.08,
          color: color(255, 255, 255, alpha)
        },
        {
          chance: 0.28,
          color: color(131, 113, 161, alpha)
        },
        {
          chance: 0.28,
          color: color(193, 56, 135, alpha)
        },
        {
          chance: 0.16,
          color: lerpColor(color(0, 241, 214, alpha), color(255, 0, 110, alpha), random())
        }
      ];
      const totalWeights = weightings.reduce((acc, val) => acc + val.chance, 0);
      let w = random(totalWeights);

      for (let o of weightings) {
        w -= o.chance;
        if (w < 0) {
          this.color = o.color;
          break;
        }
      }
    }
  }


  /*
  /////////////////////////////////
  function keyPressed() {
    if (key === "s") save();
  }
  */

  // import { p5 } from './libs/p5.js';

  ///////////////////////////////////////////////////////////
  function App() {

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
      console.log("App init was run");
      
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

      console.log("Drawing");
    },


    ///////////////////////////////////////////////////////////
    testPromise: async function() {
      await this.testingBabel()
        .then(response => console.log("Response:", response));
      console.log("testPromise awaited testingBabel function");
    },

    
    ///////////////////////////////////////////////////////////
    testingBabel: function() {
      return new Promise((resolve, reject) => {
        {
          resolve("this is a good x");
        }
      })
    },

  };

  ////////////////////////////////////////////////////////
  window.addEventListener("DOMContentLoaded", function() {
    
    console.log("DOM is loaded");
    
    
    let app = new App();
    app.init();
    
    window.onresize = resize;
    resize();

    /*
    // loop trough all
    let _app = app;
    app.init(() => {
      console.log("app init is done. Start main loop");
      setInterval(() => _app.mainLoop(), 100); // 150); // 250); // 250);
    });
    */

  });

}());
//# sourceMappingURL=bundle.js.map
