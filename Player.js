class Player{
    constructor(x, y, height, width) {
      var options={
        isStatic:false,
        restitution:0.3,
        friction:2000,
        resistance:123,
        density:1.2
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height
        this.image = loadImage("g1.png");
        World.add(world, this.body);
      }
      display(){
        fill(189, 252, 247);
      push();
      translate(this.body.position.x, this.body.position.y)
      image(this.image, 0, -45, this.width, this.height);
      pop();
      }
  }