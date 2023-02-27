const Engineer = require("../lib/engineer.js");

test("Is the github account of the engineer being collected?", () => {
  const testValue = "engineerGit";
  const employee = new Engineer("Foo", 3000, "engineer@email.com", testValue);
  expect(employee.github).toBe(testValue);
});

test("Is the getRole() returning Engineer role?", () => {
  const testValue = "engineer";
  const employee = new Engineer("Foo", 3000, "engineer@email.com", "engineerGit");
  expect(employee.getRole()).toBe(testValue);
});
