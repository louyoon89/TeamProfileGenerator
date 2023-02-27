const Manager = require("../lib/manager.js");

test("Is the office number of the manager being collected?", () => {
  const testValue = 54321;
  const employee = new Manager("Foo", 5000, "manager@email.com", testValue);
  expect(employee.officeNumber).toBe(testValue);
});

test("Is the getRole() returning Manager role?", () => {
  const testValue = "manager";
  const employee = new Manager("Foo", 5000, "manager@email.com", 54321);
  expect(employee.getRole()).toBe(testValue);
});