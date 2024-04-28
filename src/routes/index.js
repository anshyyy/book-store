const express = require("express");
const app = express();

const userControllers = require("../controllers/userControllers");
const bookController = require("../controllers/bookController");
const issueController = require("../controllers/issueController");
const notificationController = require("../controllers/notificationController");
const billController = require("../controllers/billController");
const fairController = require("../controllers/fairController");
app.get("/hello",(req,res)=>{
    res.send("hello")
});
app.use("/user",userControllers);
app.use("/book",bookController);
app.use("/issue",issueController);
app.use("/notify",notificationController);
app.use("/bill",billController);
app.use("/fair",fairController);
module.exports = app;