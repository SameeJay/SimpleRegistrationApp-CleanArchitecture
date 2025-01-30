const RegisterUser = require("../use-cases/RegisterUser");

class UserController {
  constructor(userRepository) {
    this.registerUser = new RegisterUser(userRepository);
  }

  async register(req, res) {
    try {
      const newUser = await this.registerUser.execute(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = UserController;
