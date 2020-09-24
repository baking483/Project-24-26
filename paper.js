class Paper{
    constructor(){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.4
        }
        this.body = Bodies.circle(50,100,20,options);
        this.radius = 70;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        //fill("white");
        //stroke("pink");
        //strokeWeight(4);
        //ellipse(0,0,this.radius,this.radius);
        image(this.image,0,0,this.radius,this.radius);
        pop();

    }

   
}