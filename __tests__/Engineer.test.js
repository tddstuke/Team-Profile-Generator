const Engineer = require("../lib/Engineer");

test("creates new engineer", () => {
  const engineer = new Engineer("Dave", "2", "email", "github");

  expect(engineer.name).toBe("Dave");
  expect(engineer.ID).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
