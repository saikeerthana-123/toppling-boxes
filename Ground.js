class Ground extends BaseClass {
    constructor(x,y,width,height) {
      super(x,y,width,height);
      var options = {
          isStatic: true
      }
      this.image = loadImage("sprites/ground.png");
     }
  };