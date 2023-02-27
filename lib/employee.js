class employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  // getrole returns employee
  getRole() {
    return this.constructor.name;
  }
  getrole() {
    return this.name;
  }
}

module.exports = employee;
