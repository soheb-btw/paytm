const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User,Account } = require("../db");
const JWT_SECRET_KEY = require("../config");
const { authMiddleware } = require("./middleware");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string()
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string()
});

const updateUserBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional()
})

router.post("/signup",async (req,res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({ message: "Incorrect Inputs" });
  }

  const existingUser = await User.findOne({
    username: req.body.username
  })

  if (existingUser) {
    return res.status(411).json({ message: "Email Already Taken" });
  }

  const user = await User.create(req.body);
  const userId = user._id;

  await Account.create({
    userId: userId,
    balance: Math.floor(1 + Math.random() * 100000)
  })

  const token = jwt.sign({ userId },JWT_SECRET_KEY);

  res.status(200).json({
    message: "User created successfully",
    token: token
  });
});


router.get("/signin",async (req,res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({ message: "Incorrect Inputs" });
  }

  const userFound = await User.findOne({
    username: req.body.username,
    password: req.body.password
  })

  if (!userFound) {
    return res.status(411).json({ message: "Error while logging in" });
  }

  const token = jwt.sign({ userId: userFound._id },JWT_SECRET_KEY);

  res.status(200).json({
    token: token,
    message: "login successful"
  });
});

router.put("/",authMiddleware,async (req,res) => {
  const { success } = updateUserBody.safeParse(req.body);

  if (!success) return res.status(411).json({ message: "Error while updating information" });
  try {
    await User.updateOne(
      { _id: req.userId },
      { $set: req.body }
    );

    res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    console.error("Error updating user:",error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
