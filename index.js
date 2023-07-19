// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [ {
    message: 'What is your Github username?',
    name: 'github'
},
{
    message: 'What is your email address?',
    name: 'email'
},
    
{
    message: 'What is your application called?',
    name: 'title'
},
{
    message: 'Provide a description of your application.',
    name: 'description'

},
{
    message: 'Provide installation instructions for your application.',
    name: 'install'

},
{
    message: 'Provide usage instructions for your application.',
    name: 'usage'

},
{
    message: 'Please enter contributor information.',
    name: 'contribution'

},
{
    message: 'Describe any tests performed.',
    name: 'test'

},
{
    type: 'list',
    message: 'Please select a license.',
    name: 'license',
    choices: ['Apache 2.0', 'GNU Public License', 'MIT License', 'BSD-2 Clause', 'BSD-3 Clause', 'Boost Software License', 'Creative Commons Zero', 'Eclipse Public License', 'Mozilla Public License', 'None']
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>
       writeToFile('./README.md', generateMarkdown(data)));
}

// Function call to initialize app
init();
