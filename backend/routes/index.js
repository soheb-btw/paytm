const express = require("express");
const router = express.Router();

const userRoute = require("./user");
const accoutRoute = require("./account");

router.use("/user",userRoute);
router.use("/account",accoutRoute);

module.exports = router;
