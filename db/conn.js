const mongoose = require("mongoose");

const DB = process.env.DB;

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("database connection successfull");
  })
  .catch((err) => {
    console.log("database connection faild");
  });
