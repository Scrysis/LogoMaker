/* Class examples proved to be insufficent for understanding how to implement unit testing with both
Jest and Inquirer.  Referenced additional code example at: https://github.com/Niksharpkings/Team-Profile-Generator/blob/main/__tests__/Employee.test.js */

/* const Shape = require('./shapes.js');
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');



describe('Shape', () => {
    test('Create circle object', () => {
        const circle = new Circle ('green', 'ccg', 'white');
        const shapeColor = circle.shapeColor;
        expect(shapeColor)
            .toEqual(expect.any(String));
        expect(circle.logotext)
            .toEqual(expect.any(String));
        expect(circle.logocolor)
            .toEqual(expect.any(String));
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="green" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">ccg</text>
        </svg>
        `)
    });

    test('Create square object', () => {
        const square = new Square('purple', 'svg', 'yellow');
        expect(square.shapeColor)
            .toEqual(expect.any(String));
        expect(square.logotext)
            .toEqual(expect.any(String));
        expect(square.logocolor)
            .toEqual(expect.any(String));
        expect(square.render().toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect  x="100" y="75" width="100" height="100" fill="purple" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="yellow">svg</text>
        </svg>
        `));

    });

    test('Create triangle object', () => {
        const triangle = new Triangle('blue', 'EEE', 'black');
        expect(triangle.shapeColor)
            .toEqual(expect.any(String));
        expect(triangle.logotext)
            .toEqual(expect.any(String));
        expect(triangle.logocolor)
            .toEqual(expect.any(String));
        expect(triangle.render().toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 250,182 50,182" fill="blue" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="black">EEE</text>
        </svg>
        `));
    })
    
});

 */

/* const Shape = require('./shapes.js');
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');



describe('Shape', (Circle: Circle extends Shape) => {
    test('Create circle object', () => {
        const circle = new Circle ('green', 'ccg', 'white');
        const shapeColor = circle.shapeColor;
        expect(shapeColor)
            .toEqual(expect.any(String));
        expect(circle.logotext)
            .toEqual(expect.any(String));
        expect(circle.logocolor)
            .toEqual(expect.any(String));
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="green" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">ccg</text>
        </svg>
        `)
    });

    
});

 */

/* https://jestjs.io/docs/jest-object#jestspyonobject-methodname */

const Shape = require('./shapes.js');
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');

describe('Shape', () => {
    /* afterEach(() => {
        jest.restoreAllMocks();
    }); */
    test('Create circle object', () => {
        const circle = new Circle('green', 'ccg', 'white');
        const shapeColor = circle.shapeColor;
        expect(shapeColor).toEqual(expect.any(String));
        expect(circle.logotext).toEqual(expect.any(String));
        expect(circle.logocolor).toEqual(expect.any(String));
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="green" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">ccg</text>
        </svg>
        `);
    });

    test('Create square object', () => {
        const square = new Square('purple', 'svg', 'yellow');
        expect(square.shapeColor).toEqual(expect.any(String));
        expect(square.logotext).toEqual(expect.any(String));
        expect(square.logocolor).toEqual(expect.any(String));
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect  x="100" y="75" width="100" height="100" fill="purple" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="yellow">svg</text>
        </svg>
        `);
    });

    test('Create triangle object', () => {
        const triangle = new Triangle('blue', 'EEE', 'black');
       /*  expect(triangle.shapeColor).toEqual(expect.any(String));
        expect(triangle.logotext).toEqual(expect.any(String));
        expect(triangle.logocolor).toEqual(expect.any(String)); 
        const renderText = triangle.render(); */
        const spy = jest.spyOn(triangle, "render");
        const renderText = triangle.render();
        expect(renderText).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 250,182 50,182" fill="blue" />
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="black">EEE</text>
        </svg>
        `);
    });
});
