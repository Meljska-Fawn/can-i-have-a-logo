const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter one to three characters to display on your logo.',
        validate: (input) => {
            if (input.length <= 3) {
                return true;
            }
            return 'Please enter one to three characters.';
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like to use?',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be?',
    },
]).then((answers) => {
    let shape
    switch (answers.shape) {
        case 'circle':
            shape = new shapes.Circle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case 'triangle':
            shape = new shapes.Triangle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case 'square':
            shape = new shapes.Square(answers.text, answers.textColor, answers.shapeColor);
            break;
    }
    let data = shape.render();
    fs.writeFile('./examples/logo.svg', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Generated logo.svg');
    });
});
