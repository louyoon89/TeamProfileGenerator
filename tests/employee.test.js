const Employee = require("../lib/employee.js");

test("Is the overall Employee instance running?", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("Is the name of the employee being collected?", () => {
  const name = "Louis";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Is the id of the employee being collected?", () => {
  const testValue = 12345;
  const employee = new Employee("Foo", testValue);
  expect(employee.id).toBe(testValue);
});

test("Is the e-mail address of the employee being collected?", () => {
  const testValue = "louis@email.com";
  const employee = new Employee("Foo", 1, testValue);
  expect(employee.email).toBe(testValue);
});


test("getRole() should return \"Employee\"", () => {
  const testValue = "employee";
  const employee = new Employee("Louis", 1, "louis@email.com");
  expect(employee.getRole()).toBe(testValue);
});