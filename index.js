const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ID",
        message: "What is the team manager's employee ID?",
        validate: (IDinput) => {
          if (IDinput) {
            return true;
          } else {
            console.log("Please enter manager's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valide email address!");
          }
        },
      },
      {
        type: "input",
        name: "number",
        message: "What is the team manager's office number?",
        validate: (numberInput) => {
          if (numberInput) {
            return true;
          } else console.log("Please enter a valid office number!");
          return false;
        },
      },
    ])
    .then((managerInput) => {
      const { name, ID, email, number } = managerInput;
      const manager = new Manager(name, ID, email, number);
      console.log(manager);
    });
};

addManager();
