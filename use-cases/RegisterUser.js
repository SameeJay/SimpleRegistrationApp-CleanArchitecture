class RegisterUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    const userExists = await this.userRepository.findByEmail(userData.email);
    if (userExists) throw new Error("User already exists");

    return this.userRepository.save(userData);
  }
}

module.exports = RegisterUser;
