const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygonImage;
var box1,box2,box3,box4,box5,box6,
box7,box8,box9,box10,box11,box12,
box13,box14,box15,box16;

function preload(){
polygonImage = loadImage("POLYGONIMAGE.JPG");
}
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
  blocka1 = new block(640,150,30,40);
  blocka2 = new block(670,150,30,40);
  blocka3 = new block(700,150,30,40);
  blocka4 = new block(730,150,30,40);
  blocka5 = new block(760,150,30,40);
  blocka6 = new block(790,150,30,40);
  blocka7 = new block(820,150,30,40);

  blocka8 = new block(660,110,30,40);
  blocka9 = new block(690,110,30,40);
  blocka10 = new block(720,110,30,40);
  blocka11 = new block(750,110,30,40);
blocka12 = new block(780,110,30,40);

blocka13 = new block(690,70,30,40);
  blocka14 = new block(720,70,30,40);
  blocka15 = new block(750,70,30,40);
  blocka16 = new block(720,30,30,40);
  stand2 = new stand(700,200,200,10);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball)
  sling1 = new SlingShot(this.ball,{x:100,y:200});
}
function draw() {
  background(255,255,255);  
  fill("blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("red");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("pink");
  box13.display();
  box14.display();
  box15.display();
  fill("green");
  box16.display();
  stand1.display();
  stand2.display();
  ground1.display();
  fill("blue");
  blocka1.display();
  blocka2.display();
  blocka3.display();
  blocka4.display();
  blocka5.display();
  blocka6.display();
  blocka7.display();
  fill("red");
  blocka8.display();
  blocka9.display();
  blocka10.display();
  blocka11.display();
  blocka12.display();
fill("pink");
  blocka13.display();
  blocka14.display();
  blocka15.display();
  fill("green");
  blocka16.display();
image(polygonImage,ball.position.x,ball.position.y,20,20);
  sling1.display();
  drawSprites();
}
function mouseReleased(){
  Sling1.fly();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}