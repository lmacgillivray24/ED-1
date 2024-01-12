//adding a GIF to my grid

let gif;

function preload (){
gif = loadImage ('assets/GIFTransparent.gif');
}


function setup() {
 createCanvas (windowWidth,windowHeight);
  fill ('lightBlue');
  strokeWeight (1);
}

function draw() {

  var num = 5;
  var sideLen = windowWidth/num;
 
    for (var y = 0; y < windowHeight; y = y + sideLen)
  {
    
  for (var x = 0; x < windowWidth; x = x + sideLen){
 image (gif, x, y, sidLen, sideLen);
  }
}  
}

function windowResized (){
	resizeCanvas (windowWidth, windowHeight);
}
