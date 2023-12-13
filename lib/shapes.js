

/* Basic shape class. */
class Shape{
    constructor (color, pointY, pointX){
    this.color = color;
    this.pointY = pointY;
    this.pointX = pointX;
    }
    render(){

    }
    setColor(color){
        this.color = color;
    }
}

class Circle extends Shape{
    constructor(color, pointY, pointX, radius){
        super(color, pointY, pointX);
        this.radius = radius;
    }
}

class Square extends Shape{
    constructor(color, pointY, pointX, side1, side2){
        super(color, pointY, pointX);
        this.side1 = side1;
        this.side2 = side2;
    }
}

class Triangle extends Shape{
    constructor(color, pointY, pointX, pointY2, pointX2, pointY3, pointX3){
        super(color, pointY, pointX);
       this.pointY2 = pointY2;
       this.pointX2 = pointX2;
       this.pointY3 = pointY3;
       this.pointX3 = pointX3;
    }
    render(){

    }
}