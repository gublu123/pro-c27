
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	var canvas = createCanvas(1500, 850);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(625,123,400,50);

	 bob1 = new Bob(487,440,40);
	 bob2 = new Bob(557,440,40);
	 bob3 = new Bob(627,440,40); 
	 bob4 = new Bob(697,440,40); 
	 bob5 = new Bob(767,440,40); 
	 
	 rope1 = new Rope(bob1.body,roof.body,-160,0); 
	 rope2 = new Rope(bob2.body,roof.body,-80,0); 
	 rope3 = new Rope(bob3.body,roof.body,0,0); 
	 rope4 = new Rope(bob4.body,roof.body,80,0); 
	 rope5 = new Rope(bob5.body,roof.body,160,0); 
	 
	 Engine.run(engine);
  
}


function draw() {
	background("silver");
		
  rectMode(CENTER);

  roof.display(); 
  
  bob1.display(); 
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 
  
  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display(); 
  
  textSize(20); 
  text("x:"+mouseX,25,50); 
  text("y:"+mouseY,25,75); 
  textSize(40); 
  fill('red'); 
  text("NEWTON'S CRADLE",429,50); 
  
  drawSprites();

 	
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-60})
	}
}



