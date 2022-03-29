const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;


function preload(){
  habilty1Img = loadImage("brain.png");
  habilty2Img = loadImage("force.png");
  habilty3Img = loadImage("health.png");
}

function setup() {
  createCanvas(500,700);
  
  engine = Engine.create();
  world = engine.world;

  //Guardar molde del suelo en variable 
  ground = new Ground(width/2,height,width,40); 
  wallUP = new Ground(width/2,10,width,10);
  wallL = new Ground(0,height/2,10,height);
  wallR = new Ground(500,height/2,10,height);

  //Personaje 1
  player1 = new Player(40,height-100,50,100);

  //Personaje 2
  player2 =  new Player(420,height-100,50,100);

  hbPlayer1 = new Hability1(width-460,height-645,150,habilty1Img,"red");
  hbPlayer2 = new Hability1(width-200,height-645,130,habilty1Img,"red");

  hb1Player1 = new Hability1(width-460,height-675,120,habilty2Img,"blue");
  hb1Player2 = new Hability1(width-200,height-675,180,habilty2Img,"blue");

  hab2Player1 = new Hability1(width-460,height-615,190,habilty3Img,"yellow");
  hab2Player2 = new Hability1(width-200,height-615,120,habilty3Img,"yellow");
}

function draw() {
  background(240);
  Engine.update(engine);

  //Mostar suelo
  ground.display();
  wallUP.display();
  wallL.display();  
  wallR.display();

  hbPlayer1.display();
  hbPlayer2.display();

  hb1Player1.display();
  hb1Player2.display();

  hab2Player1.display();
  hab2Player2.display();

  player1.show();
  player2.show();
  
  moveP1();
  moveP2(); 
  player1.regreat();
  player2.regreat();
  
  drawSprites();
}

function moveP1(){
  if(keyDown(LEFT_ARROW)){
    player1.moveL(); 
  }

  if(keyDown(RIGHT_ARROW)){
    player1.moveR(); 
  }

  if(keyDown(UP_ARROW)){
    player1.moveU(); 
  }
}

function moveP2(){
  if(keyDown("a")){
    player2.moveL(); 
  }

  if(keyDown("d")){
    player2.moveR(); 
  }

  if(keyDown("w")){
    player2.moveU(); 
  }
}


