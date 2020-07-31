const Engine = Matter.Engine;
const World = Matter.World;
 const Events = Matter.Events;
const Bodies = Matter.Bodies;
var drops = [];
var thunders= [];
var man;
 
function setup(){
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world
    man = new Man(130,700,200,300);
    }
function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%60===0){
      drops.push(new drop(random(100,10), 5,5));
     }
     if(frameCount%50===0){
      drops.push(new drop(random(200,10), 5,5));
     }
     if(frameCount%70===0){
      drops.push(new drop(random(300,10), 5,5));
     }
     if(frameCount%65===0){
      drops.push(new drop(random(150,10), 5,5));
     }
     if(frameCount%55===0){
      drops.push(new drop(random(250,10), 5,5));
     }
     if(frameCount%75===0){
      drops.push(new drop(random(350,10), 5,5));
     }
     for (var j = 0; j < drops.length; j++) {
          drops[j].display();
      }
     
    man.display();
     }   

