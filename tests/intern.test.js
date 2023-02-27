const Intern = require("../lib/intern.js");

test("Is the school of the intern being collected?", () => {
  const testValue = "UCSD";
  const employee = new Intern("Foo", 4000, "intern@email.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("Is the getRole() returning Intern role?", () => {
  const testValue = "intern";
  const employee = new Intern("Foo", 4000, "intern@email.com", "UCSD");
  expect(employee.getRole()).toBe(testValue);
});
