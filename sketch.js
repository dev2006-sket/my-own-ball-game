const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var blocks = [];
var maxBlocks=5;
var balls = [];
var bomb;


function preload(){

}


function setup() {
  engine = Engine.create();
  world = engine.world;

  engine.world.gravity.y = 1;

  createCanvas(windowWidth,windowHeight);

 
ball = new Ball(windowWidth/2, windowHeight-100)
 console.log(blocks);

  
 if(frameCount % 1500 === 0){
  var y = 10;

  for(var i=0; i<maxBlocks; i++){
      blocks.push(new createBlock(random(0,windowWidth), y));
       y= y + 100;
      //console.log(blocks);
  }
  
}

//Matter.Body.setStatic(balldemo.body,true);
}

function draw() {
  Engine.update(engine);
  background("skyblue");
  


  for(var i = 0; i<maxBlocks; i++){
    blocks[i].showBlock();
    blocks[i].updateY()
    
}
  
if(keyIsDown(LEFT_ARROW)){
ball.body.position.x = ball.body.position.x-20;
}
if(keyIsDown(RIGHT_ARROW)){
  ball.body.position.x = ball.body.position.x+20;  
}
for (var i = 0; i < balls.length; i++) {
  showCannonBalls(balls[i], i);
  for (var j = 0; j < blocks.length; j++) {
    if (balls[i] !== undefined && blocks[j] !== undefined) {
      var collision = Matter.SAT.collides(balls[i].body, blocks[j].body);
      if (collision.collided) {
        if (!blocks[j].isBroken && !balls[i].isSink) {
          score += 5;
          blocks[j].remove(j);
          j--;
        }

        Matter.World.remove(world, balls[i].body);
        balls.splice(i, 1);
        i--;
      }
    }
  }
}


 ball.display();

 
 keyPressed();
  drawSprites();
}


function isTouching(ball, blocks)
{
  if (ball.x - blocks.x < blocks.width/2 + ball.width/2
    && blocks.x - ball.x < blocks.width/2 + ball.width/2
    && ball.y - blocks.y < blocks.height/2 + ball.height/2
    && blocks.y - ball.y < blocks.height/2 + ball.height/2) {
     
 }


}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var bomb = new Bomb(ball.body.position.x, ball.body.position.y);
    bomb.trajectory = [];
    Matter.Body.setAngle(bomb.body, ball.body.angle);
    balls.push(bomb);
  }
}


function showCannonBalls(ball, index) {
  ball.display();
  ball.animate();
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    if (!ball.isSink) {
     // waterSound.play();
      ball.remove(index);
    }
  }
}