function setup() {
 createCanvas (windowWidth,windowHeight);
  fill ('lightBlue');
  strokeWeight (1);
}

function draw() {

  var num = 100;
  var sideLen = windowWidth/num;
 
    for (var y = 0; y < windowHeight; y = y + sideLen)
  {
    
  for (var x = 0; x < windowWidth; x = x + sideLen)
  {
     quad (
    x,y,
    x+sideLen,y,
    x+sideLen,y + sideLen,
    x,y + sideLen
  );//loop to create a row in the x direction
  }
  }
  
  function windowResized (){
  resizeCanvas (windowWidth, windowHeight)
}  
}

function windowResized (){
resizeCanvas (windowWidth, windowHeight)
}
