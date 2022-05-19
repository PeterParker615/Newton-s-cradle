const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	


	bob1 = Bodies.circle (340,300,30,30);
	//bob1.shapeColor = "pink";
	World.add(world,bob1);

	bob2 = Bodies.circle (370,300,30,30);
	//bob2.shapeColor = "pink";
	World.add(world,bob1);
	
	bob3 = Bodies.circle (400,300,30,30);
	//bob3.shapeColor = "pink";
	World.add(world,bob1);
  
	bob4 = Bodies.circle (430,300,30,30);
	//bob4.shapeColor = "pink";
	World.add(world,bob1);

	bob5 = Bodies.circle (460,300,30,30);
	//bob5.shapeColor = "pink";
	World.add(world,bob1);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  elipse(bob1.position.x,bob1.position.y,30,20);
  elipse(bob2.position.x,bob2.position.y,30,20);
  elipse(bob3.position.x,bob3.position.y,30,20);
  elipse(bob4.position.x,bob4.position.y,30,20);
  elipse(bob5.position.x,bob5.position.y,30,20);


  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
