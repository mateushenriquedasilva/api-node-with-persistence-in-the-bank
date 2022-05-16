const { v4: uuidv4 } = require("uuid");
const usersModel = require("../model/users");

// get users
const findAllUsers = async (req, res) => {
  const users = await usersModel.findAllUsers();
  res.status(200).json(users);
};

// get user by id
const findUserById = async (req, res) => {
  const users = await usersModel.findUserById(req.params.id);
  res.status(200).json(users);
};

// create new user
const createNewUser = async (req, res) => {
  if (req.body.firstname !== "" || req.body.lastname !== "") {
    const user = await usersModel.createNewUser(
      uuidv4(),
      req.body.firstname,
      req.body.lastname
    );
    return res.status(201).json({ message: "User successfully created " });
  } else {
    return res
      .status(400)
      .json({
        message: "It is necessary the first and last name to do this action",
      });
  }
};

// update user
const updateUser = async (req, res) => {
  if (req.body.firstname !== "" || req.body.lastname !== "") {
    const user = await usersModel.updateUser(
      req.params.id,
      req.body.firstname,
      req.body.lastname
    );
    res.status(200).json({ message: "User successfully update" });
  } else {
    return res
      .status(400)
      .json({
        message: "It is necessary the first and last name to do this action",
      });
  }
};

// delete user
const deleteUser = async (req, res) => {
  const user = usersModel.deleteUser(req.params.id);
  res.status(200).json({ message: "User successfully deleted" });
};

module.exports = {
  findAllUsers,
  findUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
