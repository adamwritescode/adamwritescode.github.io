// script00.js
var SAND_SIZE = 10;

var canvas = new fabric.Canvas('drawing', {
  width: window.innerWidth,
  height: window.innerWidth,
  isDrawingMode: false,
  backgroundColor: '#acada8', //444 old color second olde8e9e4
  renderOnAddRemove: false
});


var dot,
    sand_holder = [],
    area = window.innerWidth * window.innerHeight,
    randNum = fabric.util.getRandomInt(0,100),
    otherRandNum = fabric.util.getRandomInt(0,10),
    img_rake00 = document.getElementById('rake00'),
    img_rake01 = document.getElementById('rake01'),
    img_stone00 = document.getElementById('stone00'),

    inst_rake00 = new fabric.Image(img_rake00, {
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.9,
      hasControls: false,
      hasBorders: false,
      hasRotatingPoint: false
    }),
    inst_rake01 = new fabric.Image(img_rake01, {
      left: 200,
      top: 200,
      angle: 30,
      opacity: 0.9,
      hasControls: false,
      hasBorders: false,
      hasRotatingPoint: false
    }),
    inst_stone00 = new fabric.Image(img_stone00, {
      left: 300,
      top: 300,
      angle: 30,
      opacity: 0.9,
      hasControls: false,
      hasBorders: false,
      hasRotatingPoint: false
    }),

    toolbox = [inst_rake00, inst_rake01, inst_stone00];


// Using j and k to iterate because i was causing probs for some reason
for (var k = 0; k < (area/(SAND_SIZE * 10)); k++){

// dot initialization went here...
  sand_holder[k] = new fabric.Circle({
    left: fabric.util.getRandomInt(0, window.innerWidth),
    top:  fabric.util.getRandomInt(0, window.innerHeight),
    fill: '#fff',
    opacity: Math.random(0,1),
    width: SAND_SIZE,
    height: SAND_SIZE,
    selectable: false,
    radius: 2,
    hasControls: false,
    hasBorders: false,
    hasRotatingPoint: false
  });

  canvas.add(sand_holder[k]);
  //console.log('a dot was created');
}

for (var j = 0; j < toolbox.length; j++){
if(j < toolbox.length){
  canvas.add(toolbox[j]);
  }
}
canvas.renderAll();

/*
canvas.add(inst_rake00);
canvas.add(inst_rake01);
canvas.add(inst_stone00);
*/
