const express = require("express");
const app = express();
const Bill = require("../models/bill");
const Issue = require("../models/issue");
const User = require("../models/user");

app.post("/",async(req,res)=>{
    try{
        const {user_id,data,subscritpion_id,amount,discount} = req.body;
        data.forEach(async (element)=>{
             if(element.typeOf=="issue"){
                await Issue.create({
                    bookId : element.bookId,
                    assignedTo : user_id,
                    returnDate : Date(element.returnDate)
                });
             } else if(element.typOf == "subscription"){
                    await User.updateOne({
                        id : user_id
                    },{
                       isPremium : true,
                       lastDate : element.lastDate
                    })
             } 
        });

        const bill = await Bill.create({
            userId: user_id,
            data:data,
            subscription_id:subscritpion_id,
            amount:amount,
            discount:discount,
            paid : true
        });
        return res.status(200).json({
            msg: "SuccessFully created the bill",
            data: bill,
            success: true
        })

    } catch(error){
        return res.status(501).json({
            msg : "Something went wrong",
            err : error.message ?? error,
            success : false
        });
    }
})


module.exports = app;