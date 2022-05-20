const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, ID, email, number) {
    super(name, ID, email);
    this.number = number;
  }
}

module.exports = Manager;
