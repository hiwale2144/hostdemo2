const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(require("./routes/auth"));

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => {
  console.log(`server ${port} are activated`);
});
