const inquirer = require('inquirer');
const fs = require('fs');

/* const svgBoilerplate = ({ shape, shapeColor, logoText, logoColor}) => 
`
<svg version="1.1"
     width="500" height="300"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="white" />

  <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>

</svg>

`; */


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

    })