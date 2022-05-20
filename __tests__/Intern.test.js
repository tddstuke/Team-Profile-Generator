const Intern = require("../lib/Intern");

test("creates new intern", () => {
  const intern = new Intern("Dave", "2", "email", "school");

  expect(intern.name).toBe("Dave");
  expect(intern.ID).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
