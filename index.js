const express = require("express");
const bodyParser = require("body-parser");

const UserRepository = require("./repositories/UserRepositories");
const UserController = require("./controllers/userControllers");

const app = express();
app.use(bodyParser.json());

const fakeDatabase = []; 
const userRepository = new UserRepository(fakeDatabase);
const userController = new UserController(userRepository);

app.post("/register", (req, res) => userController.register(req, res));

app.listen(3000, () => console.log("Server running on port 3000"));
console.log(fakeDatabase);
