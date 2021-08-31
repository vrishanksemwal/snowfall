
 const World= Matter.World;
 const Engine=Matter.Engine; 
 const Bodies = Matter.Bodies; 
 var engine,world; 
 var scene,snowimage; 
 var snowfall; 
 var fall=[]; 
 
 
 function preload()
 { 
   scene=loadImage("snow3.jpg"); 
   snowimage=loadImage("snow4.webp"); 
  } 
  function setup() { 
    createCanvas(800,400); 
    engine=Engine.create(); 
    world=engine.world; 
  } 
  function draw() { 
    background(scene); 
    Engine.update(engine); 
    if(frameCount%5===0) { 
      fall.push(snowfall=new Snowfall()); 
    } 
    for(var i=0;i<fall.length;i++) {
       fall[i].display(); 
      } 
      console.log("snowfall") 
      drawSprites();
     }