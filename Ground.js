class Ground{
    constructor(x,y){
        var options = {
            isStatic: true
            
        }
        
        this.body = Matter.Bodies.rectangle(x,y, width, 10 ,options);
        this.width = width;
        this.height = 10;

        Matter.World.add(worldVariable,this.body);
    }
    display(){

        fill("yellow");
        rect(width/2,height-80, width,10);
    
    }

}