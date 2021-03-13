(function () {
  'use strict';

  // import { p5 } from './libs/p5.js';
  // import './libs/p5.js';
  // const p5 = require('./libs/p5.js');
  // none of the above are good!

  ///////////////////////////////////////////////////////////
  function App() {

  }

  ///////////////////////////////////////////////////////////
  App.prototype = {

    ///////////////////////////////////////////////////////////
    init: function() {
      console.log("App init was run");
      console.log("p5:", p5);
      console.log("player:", player);    
      // testing babel
      // this.testPromise();
    },


    ///////////////////////////////////////////////////////////
    draw: function() {
      // this just draws in a loop
      // requestAnimationFrame(draw);
      console.log("Drawing");
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

  };

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
