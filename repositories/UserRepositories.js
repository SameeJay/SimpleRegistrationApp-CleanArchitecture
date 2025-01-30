class UserRepository {
  constructor(database) {
    this.database = database;
  }

  async findByEmail(email) {
    return this.database.find((user) => user.email === email);
  }

  async save(userData) {
    this.database.push(userData);
    return userData;
  }
}

module.exports = UserRepository;
