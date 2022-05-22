const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
  }

  getName() {
    return super.getName();
  }

  getId() {
    return super.getId();
  }

  getEmail() {
    return super.getEmail();
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
