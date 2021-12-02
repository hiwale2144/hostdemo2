const express = require("express");
const usersch = require("../model/user");

const router = express.Router();

router.post("/test", async (req, res) => {
  const { email, password } = req.body;
  const addData = await new usersch({ email, password });
  if (addData) {
    const sv = await addData.save();
    if (sv) {
      res.status(200).json({ message: "DBRegSucc" });
      console.log("DB reg Succ");
    }
  }
});

module.exports = router;
