// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this application useful?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the command to install?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use',
        choices: ['MIT', 'BSD', 'Unlicense', 'GPL-3.0']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();

