class createBlock{
  constructor(x,y){
      var options = {
          'frictionAir': 0.2    
      }
      this.block = Bodies.rectangle(x,y,50,50,options)
      this.width = 50;
      this.height = 50;
      this.image = loadImage("monster.png");   
      
      World.add(world, this.block);
  }

  updateY(){     
      if(this.block.position.y > height){

          Matter.Body.setPosition(this.block, {x:random(0,400), y:10})
      }
  }

  showBlock(){
    this.block.velocity.y = 0.2;
    this.block.speed = 0.5;
      imageMode(CENTER);
      image(this.image,this.block.position.x,this.block.position.y,this.width,this.height);
  }
}