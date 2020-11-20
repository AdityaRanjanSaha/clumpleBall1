class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
           
        }
        this.bottomBody = Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this. x = x;
        this.y = y;
        Matter.World.add(worldVariable,this.bottomBody);


        this.leftBody = Matter.Bodies.rectangle(this.x- this.width/2,this.y- (this.height/2)-20,height,width/2,options);
        Matter.World.add(worldVariable,this.leftBody);
        

        this.rightBody = Matter.Bodies.rectangle(this.x+ this.width/2,this.y- (this.height/2)-20,height,width/2,options);
        Matter.World.add(worldVariable,this.rightBody);


    }
    display(){


       /* fill("white");
        ;
        rect(width/2+200,610,90,10);
        rect(width/2+250,575,10,80);
    */
    var posLeft=this.leftBody.position;
    push();
    translate(posLeft.x,posLeft.y);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.height,this.width/2);
    pop();

    var posBottom=this.bottomBody.position;
    push();
    translate(posBottom.x,posBottom.y);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.width,this.height);
    pop();

    var posRight=this.rightBody.position;
    push();
    translate(posRight.x,posRight.y);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.height,this.width/2);
    pop();

    }
    
}

