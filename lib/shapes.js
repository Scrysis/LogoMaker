

/* Basic shape class. */
class Shape{
    constructor (shapeColor){
    this.shapeColor = shapeColor;
    this.baseWidth = 300;
    this.baseHeight = 200;
    }
}

class Circle extends Shape{
    constructor(shapeColor){
        super(shapeColor, this.baseHeight );
        const radius = 0.25*this.baseHeight;
    }
    render(){
        const renderString = `<circle cx="25" cy="75" r=${radius} fill="${this.shapeColor}" />`;
        return renderString;
    }
}

class Square extends Shape{
   constructor(shapeColor){
    super(shapeColor, this.baseHeight);
   }
   render(){
        const renderString = `<rect x="${this.baseWidth*0.25}" y="${this.baseHeight*0.25}" width="${this.baseHeight*0.5}" height="${this.baseHeight*0.5}" fill="${this.shapeColor}" />`;
        return renderString;
   }
}

class Triangle extends Shape{
    constructor(shapeColor){
        super(shapeColor, this.baseWidth, this.baseHeight );
    }
    render(){
       const renderString = ` <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
       return renderString;
    }
}