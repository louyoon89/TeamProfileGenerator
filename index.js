//const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

// require
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const rosterPath = path.resolve(__dirname, "dist");
const htmlPath = path.join(rosterPath, "index.html");
const renderRoster = require("./lib/renderRoster.js");

// employees
const employeeRoster = [];

// gather information
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the employee?: ",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's ID number?: ",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's e-mail address?: ",
  },
  {
    type: "list",
    message: "What is the role of this employee?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your manager's office number?",
    when: function (employeeInput) {
      return employeeInput.role === "Manager";
    },
    validate: (officeNumber) => {
      if (officeNumber) {
        return true;
      } else {
        console.log("Please enter the office number:");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message:
      "Intern Role Selected: What is the name of the school the intern attending?: ",
    when: function (employeeInput) {
      return employeeInput.role === "Intern";
    },
    validate: (school) => {
      if (school) {
        return true;
      } else {
        console.log("Please enter school:");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your engineer's GitHub username?",
    when: function (employeeInput) {
      return employeeInput.role === "Engineer";
    },
    validate: (github) => {
      if (github) {
        return true;
      } else {
        console.log("Please enter the GitHub username:");
        return false;
      }
    },
  },
];

// Use prompt/then - if (user answer role = role)
// create new object with new properties
// then push new add
function userInput() {
  inquirer.prompt(questions).then(function (userAnswer) {
    if (userAnswer.role === "Manager") {
      const addManager = new manager(
        userAnswer.name,
        userAnswer.id,
        userAnswer.email,
        userAnswer.officeNumber
      );
      employeeRoster.push(addManager);
    } else if (userAnswer.role === "Engineer") {
      const addEngineer = new engineer(
        userAnswer.name,
        userAnswer.id,
        userAnswer.email,
        userAnswer.github
      );
      employeeRoster.push(addEngineer);
    } else if (userAnswer.role === "Intern") {
      const addIntern = new intern(
        userAnswer.name,
        userAnswer.id,
        userAnswer.email,
        userAnswer.school
      );
      employeeRoster.push(addIntern);
    }
    addEmployee();
  });
}

// add employee or render page
const addQuestion = [
  {
    type: "confirm",
    name: "newEmployee",
    message: "Would you like to add another employee to the team?",
  },
];

function addEmployee() {
  inquirer.prompt(addQuestion).then(function (response) {
    if (response.newEmployee === true) {
      userInput();
    } else {
      console.log(employeeRoster);
      const html = renderRoster(employeeRoster);
      console.log(html);
      fs.writeFile(htmlPath, html, null, function (err) {
        if (err) throw err;
      });
    }
  });
}
//start prompt
userInput();
