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
}


///////////////////////////////////////////
// return random integer
const random = (number) => {
  return Math.floor(Math.random() * number)
}



///////////////////////////////////////////
// exporting all
export {
  resize, random
}