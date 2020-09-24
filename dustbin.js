class Bin{
    constructor(){
       var options={
           isStatic:true,
       }
       
       this.body2=Bodies.rectangle(945,325,10,100,options);
       World.add(world,this.body2);
       this.body3=Bodies.rectangle(1060,325,10,100,options);
       World.add(world,this.body3);
       this.body1=Bodies.rectangle(1000,315,1,1,options);
       this.image=loadImage("dustbingreen.png");
       World.add(world,this.body1);
       
       
       
       //left
       //this.body = Bodies.rectangle(x,y,width,height,options);
       //right
       /*
       this.body1 = Bodies.rectangle(this.x+100,this.y,this.width,this.height+100,options);
       //bottom
       this.body2 = Bodies.rectangle(this.x+15,this.y-30,this.width+80,this.height-50,options);
       */

       
    }

    display(){
        rectMode(CENTER);
        var pos1=this.body1.position;
        imageMode(CENTER);
        image(this.image,pos1.x,pos1.y,120,120);
        var pos2=this.body2.position;
       var pos3=this.body3.position;
       fill("white");
       rect(pos2.x,pos2.y,10,100);
       rect(pos3.x,pos3.y,10,100);
       //rect(pos1.x,pos1.y,200,10);
        /*push();
        translate(pos.x,pos.y);
        translate(pos2.x,pos2.y);
        translate(pos3.x,pos3.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        rect(0,0,this.width,this.height);
        rect(pos2.x,pos2.y,10,100);
        rect(pos3.x,pos3.y,10,100);
        rect(pos.x,pos.y,200,10);
        pop();
        */
    }
}
