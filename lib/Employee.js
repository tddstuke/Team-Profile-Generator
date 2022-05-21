class Employee {
  constructor(name = "", ID = "", email = "") {
    this.name = name;
    this.ID = ID;
    this.email = email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
