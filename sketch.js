const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ground;
var ball;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  var groundOption={
    isStatic:true
  }
  var ballOption = {
    restitution:1.0
  }

  ground=Bodies.rectangle(50,380,400,20,groundOption);
  ball = Bodies.circle(200,100,20,ballOption);
  World.add(myWorld,ground);
  World.add(myWorld,ball);
  console.log(ground);
  console.log(ground.isStatic)
  
}

function draw() {
  background("black"); 
  Engine.update(myEngine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20)
 
  ellipse(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}

