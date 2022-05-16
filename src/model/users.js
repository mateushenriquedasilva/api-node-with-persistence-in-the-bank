const res = require("express/lib/response");
const poll = require("./poll");

async function findAllUsers() {
  const query = `SELECT * FROM users`;
  const result = await poll.query(query);

  let users = [
    {
      id: "",
      firstname: "",
      lastname: "",
    },
  ];

  if (result) {
    [...users] = result;
  }

  return users;
}

async function findUserById(id) {
  const query = `SELECT * FROM users WHERE id = "${id}"`;
  const result = await poll.query(query);

  let user = [
    {
      id: "",
      firstname: "",
      lastname: "",
    },
  ];

  if (result) {
    [...user] = result;
  }

  return user;
}

async function createNewUser(id, firstname, lastname) {
  const query = `INSERT INTO users VALUES("${id}", "${firstname}", "${lastname}")`;
  const result = await poll.query(query);

  return result;
}

async function updateUser(id, firstname, lastname) {
  const query = `UPDATE users SET firstname = "${firstname}", lastname = "${lastname}" WHERE id = "${id}"`;
  const result = await poll.query(query);

  return result;
}

async function deleteUser(id) {
  const query = `DELETE FROM users WHERE id = "${id}"`;
  const result = await poll.query(query);

  return result;
}

module.exports = {
  findAllUsers,
  findUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
