const inquirer = require("inquirer");
const ListPrompt = require("inquirer/lib/prompts/list");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const genertateHTML = require("./src/page-template");
const writeFile = require("./utils/generate-site");
const teamMembers = [];

// create function to get manager prompts
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
            console.log("Please enter a valid email address!");
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
      teamMembers.push(manager);
    });
};

// create function to get employee prompts including roles
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employees role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter employee's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ID",
        message: "What is the employee's ID?",
        validate: (IDinput) => {
          if (IDinput) {
            return true;
          } else {
            console.log("Please enter employee's ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: (input) => input.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a GitHub username!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school?",
        when: (input) => input.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please input intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAdd",
        message: "Would you like to add another employee?",
        default: false,
      },
    ])
    .then((employeeInput) => {
      const { name, ID, email, role, github, school, confirmAdd } =
        employeeInput;

      if (role === "Engineer") {
        employee = new Engineer(name, ID, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, ID, email, school);
        console.log(employee);
      }
      teamMembers.push(employee);
      if (confirmAdd) {
        return addEmployee();
      } else {
        console.log(teamMembers);

        return teamMembers;
      }
    });
};
addManager()
  .then(addEmployee)
  .then((teamMembers) => {
    console.log(teamMembers);
    return genertateHTML(teamMembers);
  })

  .then((HTMLdata) => {
    return writeFile(HTMLdata);
  })

  .catch((err) => {
    console.log(err);
  });
