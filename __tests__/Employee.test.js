const Employee = require("../lib/Employee");

test("creates new employee", () => {
  const employee = new Employee("Dave", "2", "gmail.com");

  expect(employee.name).toBe("Dave");
  expect(employee.ID).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});
