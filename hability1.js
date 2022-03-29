class Hability1 {
    constructor(x,y,value,image,color){
        this.image = image;
        this.x = x;
        this.y = y; 
        this.value = value;
        this.color = color;
    }
    display(){
        push();
        image(this.image, this.x-30, this.y, 20, 20);
        fill("white");
        rect(this.x, this.y, this.value, 15);
        fill(this.color);
        rect(this.x, this.y, this.value, 15);
        noStroke();
        pop();
    }
}

