// import { p5 } from './libs/p5.js';
// import './libs/p5.js';
// const p5 = require('./libs/p5.js');
// none of the above are good!

///////////////////////////////////////////////////////////
export function App() {

}

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


  /*
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
  */

}