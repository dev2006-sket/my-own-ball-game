class Ball {
    constructor(x,y){
        var options = {
            isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2
            
        }
        this.image = loadImage("ball.png");
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.body)
     
    }

    display(){
        var pos = this.body.position;
      // pos.x = mouseX;
      // pos.y = mouseY;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,30,30);
    }
}
