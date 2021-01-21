var paper
var ground
var dustbin1
var dustbin2
var dustbin3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}tyuiuop;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100, 400)
	ground = createSprite(100, 650, 1800, 20)
	dustbim1=createSprite

	dustbin1 = createSprite(550, 600, 100, 20)
	
	dustbin2 = createSprite(500, 560, 20, 100)

	dustbin3 = createSprite(600, 560, 20, 100)


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	paper.display()
	ground.display()



	


	drawSprites();

}

function keyPressed() {

	if(keyCode === UP_ARROW) {
		
Matter.Body.applyForce(paper.body, paper.body.position , { x:65 , y:-65})


	}


}