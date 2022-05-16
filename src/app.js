const express = require("express");
const cors = require("cors");
const poll = require("./model/poll");
const app = express();

const usersRouter = require("./router/api/usersRouter");
const port = process.env.PORT || 3200;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./router/root"));
app.use(express.static(__dirname + "/public"));
app.use(usersRouter);
app.listen(port, () => {
  console.log(`Connections: ${poll.activeConnections()}`);
  console.log(`Server started on port ${port}!`);
});
