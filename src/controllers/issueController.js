const Issue = require("../models/issue");
const express = require("express");
const app = express();

app.post("/create",async(req,res)=>{

    try{
        const {user_id,book_id,last_date} = req.body;
        const issueBook = await Issue.create({
            assignedTo : user_id,
            bookId:book_id,
            returnDate:Date(last_date)
        });
        return res.status(200).json({
            msg : "SuccessFully created the issue",
            data : issueBook,
            success : true
        });
    } catch(error){
        return res.status(501).json({
            msg : "Something went wrong",
            err : error.message ?? error,
            success : false
        });
    }
    
})
module.exports = app;