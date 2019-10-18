// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1{
    constructor(attr){
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height
    }
    volume() {
    return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2*(this.length * this.width + this.length * this.height + this.width * this.height)
    }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(attr){
        super(attr);  
    }
    volumeFormula() {
        return (this.length * this.width * this.height)
    }
    surfaceFormula(){
        return 6 * (this.length*this.width)
    }
}


const Cube1 = new CubeMaker({
    length: 2,
    width: 2,
    height: 2
  })

  console.log(Cube1.volumeFormula()); 
  console.log(Cube1.volume())
  console.log(Cube1.surfaceFormula())
  console.log(Cube1.surfaceArea())

