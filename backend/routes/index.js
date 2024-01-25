const express = require("express");
const router = express.Router();
const cors = require("cors");
const userRoute = require("./user");
const accoutRoute = require("./account");

const app = express();

app.use(cors());

router.use("/user",userRoute);
router.use("/account",accoutRoute);

module.exports = router;
