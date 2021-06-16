const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball,pendulam,pendulam2,ball2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ball = Bodies.circle(100,100,10)
  World.add(world,ball)
  ball2 = Bodies.circle(150,100,10)
  World.add(world,ball2)
  
 var options = {
   length:50,
   stiffness:0.1,
   bodyB:ball,
   pointA:{x:200,y:20},
   pointB:{x:0,y:0}

 }
 var options1 = {
  length:50,
  stiffness:0.1,
  bodyB:ball2,
  pointA:{x:250,y:20},
  pointB:{x:0,y:0}

}
 
 pendulam2 = Matter.Constraint.create(options1) 
  pendulam = Matter.Constraint.create(options) 
World.add(world,pendulam2)
  World.add(world,pendulam)
}

function draw() 
{
  background("white");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10)
line(pendulam.pointA.x,pendulam.pointA.y,ball.position.x,ball.position.y)
line(pendulam2.pointA.x,pendulam2.pointA.y,ball2.position.x,ball2.position.y)
ellipse(ball2.position.x,ball2.position.y,10)
}

function keyPressed(){
  if(keyCode==RIGHT_ARROW){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
}