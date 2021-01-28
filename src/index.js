import { App } from './js/App.js';
import { resize } from './js/functions.js';


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