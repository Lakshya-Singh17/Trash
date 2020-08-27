const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var trahBar1,trashBar2,trashBar3;
var dustbinImg,dustbin;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(650,320);
	dustbin.addImage("trash", dustbinImg);
	dustbin.scale = 0.45;
	ground = new Ground(400,390,800,20);
	paper = new Paper(50,350);
	trashBar1 = new Trash(600,320,20,120);
	trashBar2 = new Trash(700,320,20,120);
	trashBar3 = new Trash(650,370,100,20);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  paper.display(); 
  ground.display();
  trashBar1.display();
  trashBar2.display();
  trashBar3.display();

  
  drawSprites();
 
}



