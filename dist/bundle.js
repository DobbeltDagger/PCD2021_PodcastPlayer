!function(){"use strict";function n(){}n.prototype={init:function(){console.log("App init was run"),console.log("p5:",p5),console.log("player:",player)},draw:function(){console.log("Drawing")}};const o=()=>(console.log("resize was run"),{totalWidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,totalHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight});window.addEventListener("DOMContentLoaded",(function(){console.log("DOM is loaded"),(new n).init(),window.onresize=o,o()}))}();
//# sourceMappingURL=bundle.js.map
