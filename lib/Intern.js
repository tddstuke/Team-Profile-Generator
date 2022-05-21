const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
