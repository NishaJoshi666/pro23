var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var Box1,Box2,Box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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


	engine = Engine.create();
	world = engine.world;

	var options = {
		restitution:0.8
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	
    var options_ground = {
		isStatic:true
	}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , options_ground);
 	World.add(world, ground);

	Engine.run(engine);

	Box1 = new box(340,610,20,100);
	Box2 = new box(460,610,20,100);
	Box3 = new box(400,650,100,20);


}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  Box1.display();
  Box2.display();
  Box3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on    
  
  }
}
