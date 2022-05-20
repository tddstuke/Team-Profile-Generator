test("creates new employee", () => {
  const employee = new Employee("Dave");

  expect(employee.name).toBe("Dave");
  expect(employee.ID).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
