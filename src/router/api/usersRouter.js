const express = require("express");
const usersRouter = express.Router();
const usersController = require("../../controllers/usersController");

usersRouter.get("/users", usersController.findAllUsers);
usersRouter.get("/users/:id", usersController.findUserById);
usersRouter.post("/users", usersController.createNewUser);
usersRouter.put("/users/:id", usersController.updateUser);
usersRouter.delete("/users/:id", usersController.deleteUser);

module.exports = usersRouter;
