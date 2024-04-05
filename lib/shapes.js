/* 
const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');



class Shape{
    constructor (shapeColor){
    this.shapeColor = shapeColor;
    this.baseWidth = 300;
    this.baseHeight = 200;


    }

run(){
    



inquirer
.prompt ([
    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape for your logo:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Please select the color for your shape:',
        choices: ['blue', 'purple', 'green', 'black', 'white', 'yellow', 'orange', 'red'],
    },
    {
        type: 'input',
        name: 'logoText',
        message: 'Please enter in the letters for your logo.',
    },
    {
        type: 'list',
        name: 'logoColor',
        message: 'Please select the color for your text letters:',
        choices: ['blue', 'purple', 'green', 'black', 'white', 'yellow', 'orange', 'red'],
    },

])
.then((answers) => {
    
    switch(answers.shape){
        case "Triangle":
            var userShape = new Triangle(answers.shapeColor, answers.logoColor, answers.logoText);

            break;
        case "Circle":
            var userShape = new Circle(answers.shapeColor, answers.logoColor, answers.logoText);
            break;
        case "Square":
            var userShape = new Square(answers.shapeColor, answers.logoColor, answers.logoText);
            break;
    }
        userShape.render();
    
});

}

}

class Circle extends Shape{
    constructor(shapeColor,logoColor, logoText){
        super(shapeColor);
        const radius = 0.25*this.baseHeight;
        this.logoColor = logoColor;
        this.logoText = logoText;
    }
    render(){
        const renderString = 
        `<circle cx="25" cy="75" r=${radius} fill="${this.shapeColor}" />
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="white" />

        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${logoColor}">${logoText}</text>

        </svg>

        `;

        fs.writeFile(`${answers.shape}.svg`, renderString, (err) => 
        err? console.log(err): console.log('File created successfully.')
    );



       
    };
}

class Square extends Shape {
  constructor(shapeColor, logoColor, logoText) {
    super(shapeColor);
    this.logoColor = logoColor;
        this.logoText = logoText;
  }
  render() {
    const renderString = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="white" />
        <rect x="${this.baseWidth * 0.25}" y="${this.baseHeight * 0.25}" width="${
            this.baseHeight * 0.5
            }" height="${this.baseHeight * 0.5}" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text>

        </svg>`;
        fs.writeFile(`${answers.shape}.svg`, renderString, (err) => 
        err? console.log(err): console.log('File created successfully.');
    );

  };
}

class Triangle extends Shape{
    constructor(shapeColor, logoColor, logoText) {
        super(shapeColor);
        this.logoColor = logoColor;
        this.logoText = logoText;
    }
    render(){
       const renderString =   `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="white" />

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text>

        </svg>`;
        fs.writeFile(`${answers.shape}.svg`, renderString, (err) => 
        err? console.log(err): console.log('File created successfully.');
    };
}








    module.exports = Shape; */

    

const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require("fs/promises");

/* Basic shape class. */
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
    this.baseWidth = 300;
    this.baseHeight = 200;
  }

  run() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "shape",
          message: "Please select the shape for your logo:",
          choices: ["Triangle", "Circle", "Square"],
        },
        {
          type: "list",
          name: "shapeColor",
          message: "Please select the color for your shape:",
          choices: [
            "blue",
            "purple",
            "green",
            "black",
            "white",
            "yellow",
            "orange",
            "red",
          ],
        },
        {
          type: "input",
          name: "logoText",
          message: "Please enter in the letters for your logo.",
        },
        {
          type: "list",
          name: "logoColor",
          message: "Please select the color for your text letters:",
          choices: [
            "blue",
            "purple",
            "green",
            "black",
            "white",
            "yellow",
            "orange",
            "red",
          ],
        },
      ])
      .then((answers) => {
        switch (answers.shape) {
          case "Triangle":
            var userShape = new Triangle(
              answers.shapeColor,
              answers.logoColor,
              answers.logoText
            );
            break;
          case "Circle":
            var userShape = new Circle(
              answers.shapeColor,
              answers.logoColor,
              answers.logoText
            );
            break;
          case "Square":
            var userShape = new Square(
              answers.shapeColor,
              answers.logoColor,
              answers.logoText
            );
            break;
        }
        userShape.render();
      });
  }
}

class Circle extends Shape {
  constructor(shapeColor, logoColor, logoText) {
    super(shapeColor);
    this.radius = 0.5 * this.baseHeight;
    this.logoColor = logoColor;
    this.logoText = logoText;
  }
  render() {
    const renderString = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text>
        </svg>`;

    writeFile(`circle.svg`, renderString)
      .then(() => console.log("File created successfully."))
      .catch((err) => console.log(err));
  }
}

class Square extends Shape {
  constructor(shapeColor, logoColor, logoText) {
    super(shapeColor);
    this.logoColor = logoColor;
    this.logoText = logoText;
  }
  render() {
    const renderString = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="75" width="100" height="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text>
        </svg>`;

    writeFile(`square.svg`, renderString)
      .then(() => console.log("File created successfully."))
      .catch((err) => console.log(err));
  }
}

class Triangle extends Shape {
  constructor(shapeColor, logoColor, logoText) {
    super(shapeColor);
    this.logoColor = logoColor;
    this.logoText = logoText;
  }
  render() {
    const renderString = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 250,182 50,182" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text>
        </svg>`;

    writeFile(`triangle.svg`, renderString)
      .then(() => console.log("File created successfully."))
      .catch((err) => console.log(err));
      return renderString;
  }
}

/* const shapeGenerator = new Shape();
shapeGenerator.run(); */

module.exports = Shape;
