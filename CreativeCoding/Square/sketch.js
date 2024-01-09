function setup() {
 createCanvas (720,720);
  background (100,70,250);
  fill ('lightblue');
  strokeWeight (5);
}

function draw() {
  
  translate (60,60); //resets orgin point
 
  quad (
    0,0,
    300,0,
    300,300,
    0,300
  );
}