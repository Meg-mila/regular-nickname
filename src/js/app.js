export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-zA-Z]+[a-zA-Z0-9\-_]*[^\d{3}][a-zA-Z]+$/.test(this.name);
  }
}
