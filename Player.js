class Player{
    constructor(x,y,w,h){
        let options = {
            density: 2.0,
            restitution: 0.1,    
        };
        //Creamos cuerpo rectangular para el suelo
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("p1.png");
        this.image.scale = 0.2;
        //Agregamos cuerpo del suelo al mundo 
        World.add(world,this.body);
    }

    show(){
        let pos = this.body.position;
        push();//Push captura la nueva posición 
            rectMode(CENTER);//Cambiamos el punto de origen para las coordenadas
            noStroke();//Sin borde
            fill("gray");
            image(this.image,pos.x,pos.y-45,this.w,this.h);
        pop();//Vuelve a la posición anterior 
    }

    moveL(){
        this.body.position.x = this.body.position.x-1;
    }

    moveR(){
        this.body.position.x = this.body.position.x+1;
    }

    moveU(){
        this.body.position.y = this.body.position.y-5;
    }

    regreat(){
        if(this.body.position.x > 500 ||this.body.position.x < 0){
           this.body.position.x = this.x;

        } else if(this.body.position.y > 700 ||this.body.position.y < 0){
            this.body.position.y = this.y;
        }
    }

    
}