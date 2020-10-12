var wal,thickness
var bullet,speed,weight
var random
var wallLeftEdge
var bulletRightEdge
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
 bullet = createSprite(50, 200, 80, 20);
 bullet.shapeColor="white";
 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor=(80,80,80);
 
 bullet.velocityX=+5;

 thickness=random(22,83);
}
function draw() {
  background("black"); 

   if(hasCollided(bullet,wall)) 
   {
     bullet.velocityX=0; 

     var damage=0.5* weight * speed * speed/(thickness * thickness * thickness);
   } 
   if(damage>10)
   {
      bullet.shapeColor="red";
   }


   if(damage<10)
   {
     bullet.shapeColor="green";
   }
  
  drawSprites();
}

function hasCollided (Ibullet,Iwall){

  bulletRightEdge = Ibullet.x + Ibullet.width;
  walLeftEdge = Iwall.x

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }
    return false;
}