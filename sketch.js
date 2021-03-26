var balloon,background;

function preload(){
  
}
function setup() {
  database=firebase.database();
  console.log(database);

  createCanvas(500,500);
  balloon=createSprite(100, 400, 20, 20);
  
}

function draw() {
  background(120,255,255);  

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
  }
  
  
  

  drawSprites();
}