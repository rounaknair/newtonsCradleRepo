const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

const Constraint=Matter.Constraint;

let engine;
let world;

var support;
var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;


function setup()
{
	createCanvas(400,400);

	engine=Engine.create();
	world=engine.world;

	supportOptions=
	{
		isStatic:true,
	}
	support=Bodies.rectangle(200,100,200,10,supportOptions);
	World.add(world,support);

	var bobOptions=
	{
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8
	    
	}
    bob1=Bodies.circle(140,250,15,bobOptions)
	World.add(world,bob1);

	bob2=Bodies.circle(170,250,15,bobOptions)
	World.add(world,bob2);

	bob3=Bodies.circle(200,250,15,bobOptions)
	World.add(world,bob3);

	bob4=Bodies.circle(230,250,15,bobOptions)
	World.add(world,bob4);

	bob5=Bodies.circle(260,250,15,bobOptions)
	World.add(world,bob5);

	string1=new rope(bob1,support,-60, 5)
	string2=new rope(bob2,support,-30, 5)
	string3=new rope(bob3,support,  0, 5)
	string4=new rope(bob4,support, 30, 5)
	string5=new rope(bob5,support, 60, 5)

	rectMode(CENTER);
	ellipseMode(RADIUS);

}

function draw()
{
	background("grey");
    Engine.update(engine);

	fill("white");
	rect(support.position.x,support.position.y,200,10);
 
	ellipse(bob1.position.x,bob1.position.y,15);
	ellipse(bob2.position.x,bob2.position.y,15);
	ellipse(bob3.position.x,bob3.position.y,15);
	ellipse(bob4.position.x,bob4.position.y,15);
	ellipse(bob5.position.x,bob5.position.y,15);

	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();
}

function keyPressed()
 {
	if (keyCode == LEFT_ARROW)
	 {
		Matter.Body.applyForce(bob1,bob1.position,{x:-30,y:-25});
	}
}