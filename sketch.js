var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, wall2, wall3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wall1 = createSprite(width/2, 620, 200, 20)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	wall1Body = Bodies.rectangle(width/2, 620, 200, 10)
	World.add(world, wall1Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	Matter.Body.setStatic(wall1Body, false)
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	wall1.x= wall1Body.position.x
	wall1.y= wall1Body.position.y
	keyPressed();
	drawSprites();	
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	packageBody.restitution = 0.5
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
    
  }
}



