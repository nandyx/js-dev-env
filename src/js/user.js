export default class User {

  constructor(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
  }

  getHi() {
    return `Hola ${this.username}`;
  }
  getName() {
    return this.name;
  }
}
