class Bob{
    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution: 1,
            friction: 0.75,
            density: 0.4,
            frictionAir:0
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body)
    }

    display(){
    var pos =this.body.position;
      ellipseMode(CENTER);
      fill("pink");
      ellipse(pos.x, pos.y, 80, 80);
    }
}