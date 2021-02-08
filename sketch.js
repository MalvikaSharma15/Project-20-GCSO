var car,walls;
var Weight;
var speed1, speed2, speed3, speed4;

function setup() {
  createCanvas(500,250);
  wall1 = createSprite(400, 50, 20, 40);
  car1 = createSprite(100,50,10,10);
  wall2 = createSprite(400, 100, 20, 40);
  car2 = createSprite(100,100,10,10);
  wall3 = createSprite(400, 150, 20, 40);
  car3 = createSprite(100,150,10,10);
  wall4 = createSprite(400, 200, 20, 40);
  car4 = createSprite(100,200,10,10);

  speed1 = random(4,9);
  speed2 = random(3,7);
  speed3 = random(5,9),
  speed4 = random(4,7);

  weight=random(400,1500);

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;

  car1.shapeColor = "green"
  car2.shapeColor = "green"
  car3.shapeColor = "green"
  car4.shapeColor = "green"
}

function draw() {
  background("yellow"); 

  if(wall1.x -car1.x < (car1.width + wall1.width)/2)
  {
    car1.velocityX = 0;
    
    var deformation = 0.5* weight* speed1* speed1 /22500;

    if(deformation > 180){
      car1.shapeColor = (255, 0, 0);
    }

   if(deformation < 180 && deformation > 100 ){ 
    car1.shapeColor = (230, 230, 0);
  }

  if(deformation < 100){
    car1.shapeColor = (0, 255, 0);
      }
  }

  if(wall2.x - car2.x < (car2.width + wall2.width)/2)
  {
    car2.velocityX = 0;
    
    var deformation = 0.5* weight* speed2* speed2 /22500;

    if(deformation > 180){
      car2.shapeColor = (255, 0, 0);
    }

   if(deformation < 180 && deformation > 100 ){ 
    car3.shapeColor = (230, 230, 0);
  }

  if(deformation < 100){
    car2.shapeColor = (0, 255, 0);
      }
  }

  if(wall3.x - car3.x < (car3.width + wall3.width)/2)
  {
    car3.velocityX = 0;
    
    var deformation = 0.5* weight* speed3* speed3 /22500;

    if(deformation > 180){
      car3.shapeColor = (255, 0, 0);
    }

   if(deformation < 180 && deformation > 100 ){ 
    car3.shapeColor = (230, 230, 0);
  }

  if(deformation < 100){
    car3.shapeColor = (0, 255, 0);
      }
  }

  if(wall4.x - car4.x < (car4.width + wall4.width)/2)
  {
    car4.velocityX = 0;
    
    var deformation = 0.5* weight* speed4* speed4 /22500;

    if(deformation > 180){
      car4.shapeColor = (255, 0, 0);
    }

   if(deformation < 180 && deformation > 100 ){ 
    car4.shapeColor = (230, 230, 0);
  }

  if(deformation < 100){
    car4.shapeColor = (0, 255, 0);
      }
  }
  drawSprites();
}