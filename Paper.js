class Paper {
    constructor(x, y) {
 var options = {
    isStatic: false,
    resistution: 0.3,
    friction: 0.5,
    density: 1.2
}




    this.r = 20
this.body = Bodies.circle(x, y, 20, options)
World.add(world, this.body)
    }
display()
{
    var pos = this.body.position

    
    
   
    strokeWeight(3)
    fill("pink")
    ellipse(pos.x, pos.y, this.r, this.r)
    

}
}