const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, ID, email, number) {
    super(name, ID, email);
    this.number = number;
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
    return "Manager";
  }
}

module.exports = Manager;
