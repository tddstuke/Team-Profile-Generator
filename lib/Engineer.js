const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, ID, email, github) {
    super(name, ID, email);
    this.github = github;
  }
}

module.exports = Engineer;
