var gym , bath , brush,drink,eat,ufo, move , sleep;



function preload() {
gym = loadAnimation("Images/gym1.png" , "Images/gym2.png" , "Images/gym11.png" , "Images/gym12.png" );
bath = loadAnimation("Images/bath1.png" , "Images/bath2.png");
brush = loadAnimation("Images/brush.png");
drink = loadAnimation("Images/drink1.png" , "Images/drink1.png");
eat = loadAnimation("Images/eat1.png" , "Images/eat2.png" );
ufo = loadImage("Images/iss.png")
move = loadAnimation("Images/move.png" , "Images/move1.png")
sleep = loadAnimation("Images/sleep.png")
}












function setup() {
  createCanvas(1000,800);
  Astronaut = createSprite(550, 500);
  Astronaut.addAnimation("sleep", sleep);
  Astronaut.scale = 0.1;
}



function draw() {
  background(ufo);
  textSize(30);
  fill("black");
  text("DOWN_ARROW for astronaut’s gymming." ,200,100);
  text("LEFT_ARROW for astronaut’s bathing." , 200,150);
  text("RIGHT_ARROW for astronaut’s eating." ,200,200 );
  text("m button for moving", 200,250);
  text("press S for sleeping." , 200,300);
  



  drawSprites();

  if (keyDown("UP_ARROW")) {
    Astronaut.addAnimation("brush", brush);
    Astronaut.changeAnimation("brush");
    Astronaut.y = 550;
    Astronaut.velocity.X = 0;
    Astronaut.velocity.Y = 0;
  }

  if (keyDown("down")) {
    Astronaut.addAnimation("gym", gym);
    Astronaut.changeAnimation("gym");
    Astronaut.y = 550;
    Astronaut.x = 550;
    Astronaut.velocity.X = 0;
    Astronaut.velocity.Y = 0;
}
  if (keyDown("left")) {
    Astronaut.addAnimation("eat", eat);
    Astronaut.changeAnimation("eat");
    Astronaut.y = 550;
    Astronaut.x = 550;
    Astronaut.velocity.X = 0;
    Astronaut.velocity.Y = 0;
  } 

  if (keyDown("right")) {
    Astronaut.addAnimation("bath", bath);
    Astronaut.changeAnimation("bath");
    Astronaut.y = 550;
    Astronaut.x = 550;
    Astronaut.velocity.X = 0;
    Astronaut.velocity.Y = 0;
  }
  if (keyDown("o")) {
    Astronaut.addAnimation("moving", move);
    Astronaut.changeAnimation("moving");
    
    Astronaut.velocity.X = 3;
    Astronaut.velocity.Y = 3;
  }

  if (keyDown("s")) {
    Astronaut.addAnimation("sleep", sleep);
    Astronaut.changeAnimation("sleep");
    Astronaut.y = 550;
    Astronaut.x = 550;
    Astronaut.velocity.X = 0;
    Astronaut.velocity.Y = 0;
  } 







  }