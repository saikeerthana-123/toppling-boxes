const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,310,50,50);
    box2 = new Box(900,310,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(800,310);
    log1 = new Log(800,260,300,PI/2);
    pig2 = new Pig(800,220);
    box3 = new Box(700,220,70,70);
    box4 = new Box(900,220,70,70);
    log2 = new Log(800,180,300,PI/2);
    box5 = new Box(800,160,60,60);
    log3 = new Log(750,130,150,PI/8);
    log4 = new Log(850,130,150,-PI/8)
    bird = new Bird(50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}