const Notification = require("../models/notification");
const express = require("express");

const app = express();

app.get("/",async(req,res)=>{
    try{
        const notif = await Notification.find();
        return res.status(200).json({
            msg : "SuccessFully fetched the notification",
            data : notif,
            success : true
        })

    } catch(error){
        console.log(error);
        return res.status(501).json({
            msg: "Something went wrong",
            err: error.message ?? error,
            success: false
        });
    }
});
module.exports = app;