const express = require("express");
const app = express();
const { JWT_KEY } = require("../config/server_config");
const User = require("../models/user");
const Issue = require("../models/issue");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
function createToken(user) {
  try {
    // console.log("in user", user);
    const result = jwt.sign(user, JWT_KEY, { expiresIn: "5h" });
    return result;
  } catch (error) {
    console.log("Something went wrong in token creation.");
    throw error;
  }
}

function verifyToken(token) {
  try {
    const response = jwt.verify(token, JWT_KEY);
    return response;
  } catch (error) {
    console.log("Something went wrong during verification of the token");
    throw error;
  }
}

function checkPassword(userInputPassword, encryptedPassword) {
  try {
    return bcrypt.compareSync(userInputPassword, encryptedPassword);
  } catch (error) {
    console.log("Something went wrong in password comparison");
    throw error;
  }
}
async function signIn(userEmail, plainPassword) {
  try {
    //step 1 -> fetch the user
    const user = await User.findOne({
      email: userEmail,
    });
    console.log(user)
    // step 2 -> compare the user
    const encryptedPassword = user.password;

    const newP = bcrypt.hashSync(plainPassword, 12);

    const passwordMatch = checkPassword(
      plainPassword,
      encryptedPassword
    );

    if (!passwordMatch) {
      console.log("Password dosen't match");
      throw { error: "Incorrect password" };
    }
    const newJWTtoken = createToken({ userId: user._id, username: user.username });

    return { userId: user._id, token: newJWTtoken };
  } catch (error) {
    console.log("Something went wrong in signIn process");
    throw error;
  }
}
app.post("/subscribe/:id", async (req, res) => {
  try {


    const user = await User.updateOne({
      id: req.params.id
    }, {
      isPremium: true,
      lastDate: req.body.lastDate
    });
    console.log(user);
    return res.status(200).json({
      msg: "SuccessFully subscribed the user",
      data: user,
      success: true
    })
  } catch (error) {
    return res.status(501).json({
      msg: "Something went wrong",
      err: error.message ?? error,
      success: false
    });
  }




})
app.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    const issues = await Issue.find({ assignedTo: userId }).populate({
      path: 'bookId',
      model: 'Book'
    });
    //console.log(issues);
    user.booksIssued = issues;
    console.log(user);
    return res.status(200).json({
      msg: "SuccessFully fetched the user",
      data: user,
      success: true
    })
  } catch (error) {
    return res.status(501).json({
      msg: "Something went wrong",
      err: error.message ?? error,
      success: false
    });
  }
});

app.get("/:id/fetch",async(req,res)=>{
  try{
    const userId = req.params.id;
    const user = await User.findById(userId);
    console.log(user);
    return res.status(200).json({
      msg: "SuccessFully fetched the user",
      data: user,
      success: true
    });

  } catch(error){
    return res.status(501).json({
      msg: "Something went wrong",
      err: error.message ?? error,
      success: false
    });
  }
})

app.post("/", async (req, res) => {
  try {

    const user = await User.create(req.body);
    console.log(user);
    return res.status(200).json({
      msg: "SuccessFully created the user",
      data: user,
      success: true
    })

  } catch (error) {
    return res.status(501).json({
      msg: "Something went wrong",
      err: error.message ?? error,
      success: false
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const response = await signIn(email, password);
    return res.status(200).json({
      msg: "SuccessFully fetched the user",
      data: response,
      success: true
    })

  } catch (error) {
    return res.status(501).json({
      msg: "Something went wrong",
      err: error.message ?? error,
      success: false
    });
  }
})








module.exports = app;