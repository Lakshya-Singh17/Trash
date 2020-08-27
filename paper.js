class Paper{
    constructor(x,y,radius){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            isStaic: false,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 50;
        this.image = loadImage("paper ball.png");
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        keyPressed();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-10});
    }
}