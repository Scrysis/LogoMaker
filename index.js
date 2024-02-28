const inquirer = require('inquirer');
const fs = require('fs');

const svgBoilerplate = ({ shape, logoText, logoColor}) => 
`
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="white" />

 ${shape.render()}

  <text x="150" y="125" font-size="40" text-anchor="middle" fill="${logoColor}">${logoText}</text>

</svg>

`;


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
            case Triangle:
                var userShape = new Triangle(answers.shapeColor);
                break;
            case Circle:
                var userShape = new Circle(answers.shapeColor);
                break;
            case Square:
                var userShape = new Square(answers.shapeColor);
                break;
        }

        const svgOut = svgBoilerplate(userShape, answers.logoText, answers.logoColor);

        fs.writeFile(`${answers.shape}.svg`, svgOut, (err) => 
            err? console.log(err): console.log('File created successfully.')
        );

    });