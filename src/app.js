const express = require("express");
const app = express();
const db = require("./config/db");
const {PORT} = require("./config/server_config");
const cors = require("cors");
const bodyParser = require("body-parser");

const userControllers = require("./controllers/userControllers");
const bookController = require("./controllers/bookController");
const issueController = require("./controllers/issueController");


(()=>{
    app.use(cors());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/user",userControllers);
    app.use("/book",bookController);
    app.use("/issue",issueController);
    app.listen(PORT,()=>{
        console.log(`Server Started on ${PORT}`);
    })
})();