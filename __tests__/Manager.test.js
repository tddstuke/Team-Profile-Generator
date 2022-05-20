const Manager = require("../lib/Manager.js");

test("creates new Manager", () => {
  const manager = new Manager("Dave", "2", "gmail.com", "785-727-0800");

  expect(manager.name).toBe("Dave");
  expect(manager.ID).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.number).toEqual(expect.any(String));
});
