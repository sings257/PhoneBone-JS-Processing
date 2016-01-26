//Variables
var dogstanding;
var dogwalking;
var trash1;
var trash2;
var food;
var boom;
var won;
var x= 50, y= 100, speedX=0, speedY=0, gravity = 0.98;

var keyUp = false;
var keyRight = false;
var gameOver = false;

var alive = true;
var winning = false;

function preload(){
  dogstanding = loadImage("../images/data/dog_standing.png");
  dogwalking = loadImage("../images/data/dog_walking.png");
  trash1 = loadImage("../images/data/trash1.png");
  trash2 = loadImage("../images/data/trash2.png");
  food = loadImage("../images/data/pedigree.png");
  boom = loadImage("../images/data/Game_Over.png");
  won = loadImage("../images/data/winner_banner.png");
  // mySound = loadSound('data/win.wav');
}

function setup() {
  createCanvas(1280, 600);
  smooth();

}

function draw() {
  background(52, 198, 190);
  
  textSize(22);
  textFont("Avenir");
  s= "INSTRUCTIONS TO PLAY";
  fill(255, 255, 255);
  text(s, 520, 50, 500, 50);
  
  textSize(18);
  textFont("Avenir");
  textAlign(CENTER);
  s= "Help 'Patch' reach the good food by avoiding the trash.";
  fill(255, 255, 255);
  text(s, 420, 100, 460, 50);

  textSize(18);
  textFont("Avenir");
  textAlign(CENTER);
  s= "Press keyRight and keyUp to move. Press the spaceBar to RESTART.";
  fill(255, 255, 255);
  text(s, 485, 150, 320, 50);
  
  
  noStroke();
  fill(142, 201, 85);
  rect(0, 425, 1280, 50);

  noStroke();
  fill(170, 139, 118);
  rect(0, 475, 1280, 175);

  x = x + speedX;
  y = y + speedY;

  speedY += gravity;
  image(dogstanding, x, y);

  if (y>300) {
    y = 300;
    gravity = 0;
  } else {
    gravity = 0.98;
  }

  image(trash1, 300, 420);
  image(trash2, 750, 420);
  image(food, 1070, 385);

  collision();
  println("y = " + y);
}


function keyPressed() {
  if (alive===true) {
    if (keyCode == RIGHT_ARROW) {
      // keyRight = true;
      println("right");
      speedX += 6;
      image(dogwalking, x, y);
    }else if (keyCode == UP_ARROW) {
      // keyUp = true;
      println("left");
      speedY =-20;
    }
  }
}

function keyReleased() {
  if (alive===true) {
    if (keyCode === RIGHT_ARROW) {
      // keyRight = false;
      speedX = 0;
      image(dogstanding, x, y);
      println(x);
      return false;
    }

    if (keyCode === UP_ARROW) {
      // keyUp = false;
      speedY = 0;
      return false;
    }
  }
}

function collision() {

  
///////////////////////////////////////
  if (alive === true) {

    if ( (x > 200 && x < 350) && (y > 180)) {
      println("i have collided");  
      alive = false;
    } else if ((x > 600 && x < 700) && (y > 180)) {
      println("i have collided");  
      alive = false;
    }
    
  }      
///////////////////////////////////////
  if ( x > 944) {
      println("I have won");
      imageMode(CENTER);
      image(won, width/2, height/2);
      alive =false;
      winning = true;
      // x = 50;
      // mySound.play();
    }
  
  if (alive === false && winning === false) {
      imageMode(CENTER);
      image(boom, width/2, height/2);
      speedX=0;

  }

    if (keyIsPressed === true && key === ' ') {
      alive = true;
      println("keypressed");
      restart();
      
    }  
  
}

function restart() {
  imageMode(CORNER);
  x = 50;
  y= 100;
  speedX = 0;
  speedY = 0;

  image(dogstanding, x, y);
  image(dogwalking, x, y);
  image(trash1, 300, 420);
  image(trash2, 750, 420);
  image(food, 1070, 385);
  
  alive = true;
  winning = false;

}
