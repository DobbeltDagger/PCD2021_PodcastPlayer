import { random } from '../../functions.js';

//////////////////////////////////////////////
// make the canvas and append it!
const initAudioCanvas = () => {

  // setup canvas
  const cnvElm = document.createElement('canvas');
  const cnvWrapper = document.getElementById('peakFile');
  const w = cnvWrapper.offsetWidth;
  cnvElm.id = 'audioCanvas';
  cnvElm.height = 60; // must set this!
  cnvElm.width = w; // must set this!
  const ctx = cnvElm.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, cnvElm.width, cnvElm.height);

  // wrapper
  cnvWrapper.appendChild(cnvElm);

  return ctx;
}


//////////////////////////////////////////////
// draw the sound profile in the canvas!
const drawAudioImg = (ctx, sound) => {
  console.log("drawAudioImg was run");

  // sound is defined
  if (typeof sound !== 'undefined') {
    console.log("soundSrouce:", sound);

    // then, is sound source defined?
    if (typeof sound._src !== 'undefined') {
      console.log("sound._src:", sound._src);

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      // audioBuffer!
      // https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer


    }
    
  }
  

  const cnvWrapper = document.getElementById('peakFile');
  const w = cnvWrapper.offsetWidth;
  const h = cnvWrapper.offsetHeight;

  ctx.fillStyle = 'rgba(0,0,0,0)'
  ctx.clearRect(0,0,w,h);

  // run through all pixs
  ctx.fillStyle = 'white';
  for (let i = 0; i < (w-1); i++) {
    const h = random(50);
    ctx.fillRect(i, 60-h, 1, h);
  }
}


////////////////////////////////
export {
  initAudioCanvas, drawAudioImg
}