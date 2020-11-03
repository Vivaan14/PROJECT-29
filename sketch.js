const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var box1,box2,box3,box4,box5,box6,
box7,box8,box9,box10,box11,box12,
box13,box14,box15,box16;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  box1 = new block(300,230,30,40);
  box2 = new block(330,230,30,40);
  box3 = new block(360,230,30,40);
  box4 = new block(390,230,30,40);
  box5 = new block(420,230,30,40);
  box6 = new block(450,230,30,40);
  box7 = new block(480,230,30,40);

  box8 = new block(330,190,30,40);
  box9 = new block(360,190,30,40);
  box10 = new block(390,190,30,40);
  box11 = new block(420,190,30,40);
  box12 = new block(450,190,30,40);

  box13= new block(360,150,30,40);
  box14= new block(390,150,30,40);
  box15= new block(420,150,30,40);

  box16 = new block(390,110,30,40);
  ground1 = new ground();
  stand1 = new stand(390,300,250,10);
  stand2 = new stand(700,200,200,10);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball)
  sling1 = new SlingShot(this.ball,{x:100,y:200});
}
function draw() {
  background(255,255,255);  
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  stand1.display();
  stand2.display();
  ground1.display();
image(POLYGON IMAGE.jpg,ball.position.x,ball.position.y,20,20);
  sling1.display();
  drawSprites();
}
function mouseReleased(){
  Sling1.fly();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}