

/* Basic shape class. */
class Shape{
    constructor (shapeColor, text, textColor ){
    this.color = color;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.baseWidth = 300;
    this.baseHeight = 200;
    }
}

class Circle extends Shape{
    constructor(shapeColor, text, textColor ){
        super(shapeColor, text, textColor, baseWidth, baseHeight );
        const radius = 0.25*this.baseHeight;
    }
    render(){

    }
}

class Square extends Shape{
   
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