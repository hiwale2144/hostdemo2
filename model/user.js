const mongoose = require("mongoose");

const userSch = mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

const usersch = mongoose.model("hostuser", userSch);

module.exports = usersch;
