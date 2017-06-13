// script00.js


var canvas = new fabric.Canvas('drawing', {
  width: window.innerWidth,
  height: window.innerWidth,
  isDrawingMode: false,
  backgroundColor: '#fff'
});


var randNum = fabric.util.getRandomInt(0,100),
    otherRandNum = fabric.util.getRandomInt(0,10),
    theColor = new fabric.Color('rgba(255, 20, 30, 1)'),
    img_rake00 = document.getElementById('rake00'),
    img_rake01 = document.getElementById('rake01'),
    img_stone00 = document.getElementById('stone00'),

    inst_rake00 = new fabric.Image(img_rake00, {
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.5
    }),
    inst_rake01 = new fabric.Image(img_rake01, {
      left: 200,
      top: 200,
      angle: 30,
      opacity: 0.85
    }),
    inst_stone00 = new fabric.Image(img_stone00, {
      left: 300,
      top: 300,
      angle: 30,
      opacity: 0.85
    }),

    images = [inst_rake00, inst_rake01, inst_stone00];


console.log(randNum + ' ' + otherRandNum);
console.log(images.length);
console.log(images);
console.log(images[0]);
console.log(images[1]);
console.log(images[2]);

for (var i = 0, j = 0; i < 100; i++){

  if(i <= images.length){
    canvas.add(images[j]);
    j++;
  }

  dot = new fabric.Circle({
    left: fabric.util.getRandomInt(0, window.innerWidth),
    top:  fabric.util.getRandomInt(0, window.innerHeight),
    fill: 'red',
    opacity: Math.random(0,1),
    width: 5,
    height: 5,
    selectable: false,
    radius: 3
  });
  canvas.add(dot);
  //console.log('a dot was created');
}

/*
canvas.add(inst_rake00);
canvas.add(inst_rake01);
canvas.add(inst_stone00);
*/
