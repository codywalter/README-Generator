const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("");
const api = require("");

function userResponse() {
  return inquirer.prompt([
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
  ]);
}
