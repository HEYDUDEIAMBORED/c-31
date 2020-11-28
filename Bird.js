class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg=loadImage("sprites/smoke.png");
    this.trajectory=[];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
   if (this.body.velocity.x>10 && this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    
   }
    for (var h=0; h<this.trajectory.length;h++){
     //  imageMode(CENTER)
      image(this.smokeImg,this.trajectory[h][0],this.trajectory[h][1])
    }
    
  }
}
