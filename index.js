const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// const generateMarkdown = require("./utils/generateMarkdown");
// const api = require("");

function userResponse() {
  //BEGINNING OF FUNCTION
  return inquirer.prompt([
    //BEGINNING OF PROMPTS
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the URL to your GitHub project?",
      name: "url",
    },
    {
      type: "input",
      message: "Please provide a brief description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What packages need to be installed to run your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What technologies were used to create your project?",
      name: "technology",
    },
    {
      type: "input",
      message: "Please provide a description of how your project can be used.",
      name: "usage",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license would you like to have?",
      choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "Please list all contributors",
      name: "contributors",
    },
    {
      type: "input",
      message: "What command is used to run a test?",
      name: "test",
    },
  ]); //END OF PROMPTS
} //END OF FUNCTION

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("You have successfully created a new file!");
  });
}

async function init() {
  try {
    const answers = await userResponse();
    generateMarkdown(answers);
    writeToFile("README.md", generateMarkdown(answers));
  } catch (err) {
    console.log(err);
  }
}

init();
