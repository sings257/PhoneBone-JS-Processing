//Variables

int numFrames=2;
PImage dogstanding;
PImage dogwalking;
PImage trash1;
PImage trash2;
PImage food;
PImage boom;
PImage won;
float x= 50, y= 100, speedX=0, speedY=0, gravity = 0.98;

boolean keyUp = false;
boolean keyRight = false;
boolean keyLeft = false;
boolean gameOver = false;

boolean alive = true;
boolean winning = false;

void setup() {
  size(1280, 600);
  smooth();
  //  frameRate(50);
  dogstanding = loadImage("dog_standing.png");
  dogwalking = loadImage("dog_walking.png");
  trash1 = loadImage("trash1.png");
  trash2 = loadImage("trash2.png");
  food = loadImage("pedigree.png");
  boom = loadImage("Game_Over.png");
  won = loadImage("winner_banner.png");
}

void draw() {
  background(52, 198, 190);

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


void keyPressed() {
  if (alive==true) {
    if (keyCode == RIGHT) {
      keyRight = true;
      speedX += 6;
      image(dogwalking, x, y);
    }
    //
    //  if (keyCode == LEFT) {
    //    keyLeft = true;
    //    speedX -= 6;
    //  }


    if (keyCode == UP) {
      keyUp = true;
      speedY =-20;
    }
  }
}

void keyReleased() {
  if (alive==true) {
    if (keyCode == RIGHT) {
      keyRight = false;
      speedX = 0;
      image(dogstanding, x, y);
      println(x);
    }

    //  if (keyCode == LEFT) {
    //    keyLeft = true;
    //    speedX = 0;
    //    println(y);
    //  }

    if (keyCode == UP) {
      keyUp = false;
      speedY = 0;
    }
  }
}

void collision() {

  
///////////////////////////////////////
  if (alive == true) {

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
    }
  
  if (alive == false && winning == false) {
      imageMode(CENTER);
      image(boom, width/2, height/2);
      speedX=0;

  }

    if (keyPressed && key == ' ') {
      alive = true;
      println("keypressed");
      restart();
    }  
  
}

void restart() {
  imageMode(CORNER);
  x = 50;
  y= 100;
  speedX = 0;
  speedY = 0;
//  gravity = 0.98;
//  
//    x = x + speedX;
//  y = y + speedY;
//  speedY += gravity;

  
  
  image(dogstanding, x, y);
  image(trash1, 300, 420);
  image(trash2, 750, 420);
  image(food, 1070, 385);

//  
//  
//  x = x + speedX;
//  y = y + speedY;


  //  dogstanding = image(dogstanding, x, y);
  //  trash1 = image(
}

