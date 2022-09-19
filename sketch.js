
function setup() {
  createCanvas(925,400);
  background(51);
  box = createSprite(462.5,200,30,30);
box.shapeColor="purple";
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
 


  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("brown");
    box.shapeColor="pink";
    box.x=box.x+5;
    box.y=box.y+5;
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("darkblue");
    box.shapeColor="lightblue";
    box.x=box.x-5;
    box.y=box.y-5;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.x=box.x+5;
    box.y=box.y-5;
    box.shapeColor="yellow";
    background("orange");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.x=box.x-5;
    box.y=box.y+5;
    box.shapeColor="lightgreen";
    background("green");
  }


  
  drawSprites();
}

