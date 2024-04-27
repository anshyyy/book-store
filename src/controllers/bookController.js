const express = require("express");

const app = express();
const Book = require("../models/books");
const Notification = require("../models/notification");


app.get("/", async (req, res) => {
    try {
        const book = await Book.find();
        return res.status(200).json({
            msg: "SuccessFully fetched the books",
            data: book,
            success: true
        });
    } catch (error) {
        return res.status(501).json({
            msg: "Something went wrong",
            err: error.message ?? error,
            success: false
        });
    }
});

app.post("/create",async(req,res)=>{
     try{

        // {
        //     ISBN: "439095026",
        //     title: "Tell Me This Isn't Happening",
        //     author: "Robynn Clairday",
        //     yearOfPublication: 1999,
        //     rating:3
        //     price:35
        //     publisher: "Scholastic",
        //     imageURLS: {
        //       small: "http://images.amazon.com/images/P/0439095026.01.THUMBZZZ.jpg",
        //       medium: "http://images.amazon.com/images/P/0439095026.01.MZZZZZZZ.jpg",
        //       large: "http://images.amazon.com/images/P/0439095026.01.LZZZZZZZ.jpg",
        //     },
        //   },
        const book = await Book.create(req.body);
        console.log(await Notification.create({title:`A new Book : ${book.title} has been added into the database`}));
        return res.status(200).json({
            msg: "SuccessFully created the book",
            data: book,
            success: true
        });
     } catch(error){
        return res.status(501).json({
            msg: "Something went wrong",
            err: error.message ?? error,
            success: false
        });
     }
});


app.post("/", async (req, res) => {
    try {
        const title = req.query.title
        const regex = new RegExp(title, "i"); // 'i' for case insensitive
        const books = await Book.find({ title: { $regex: regex } });
        return res.status(200).json({
            msg: "SuccessFully fetched the books",
            data: books,
            success: true
        });
    } catch (error) {
        return res.status(501).json({
            msg: "Something went wrong",
            err: error.message ?? error,
            success: false
        });
    }
});


app.post("/filter",async(req,res)=>{
    try{
            const criteria = req.body;
  
            let filter = {};
            
            if (criteria.minRating !== undefined) {
              filter.ratings = { $gte: criteria.minRating };
            }
            
            if (criteria.author) {
              filter.author = { $regex: new RegExp(criteria.author, 'i') }; // Case insensitive search
            }
            
            if (criteria.publisher) {
              filter.publisher = { $regex: new RegExp(criteria.publisher, 'i') }; // Case insensitive search
            }
        
            const books = await Book.find(filter);
            return res.status(200).json({
                msg: "SuccessFully fetched the book",
                data: books,
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

app.get("/:id", async (req, res) => {
    try {

        const book = await Book.findById(req.params.id);
        return res.status(200).json({
            msg: "SuccessFully fetched the book",
            data: book,
            success: true
        });

    } catch (error) {
        return res.status(501).json({
            msg: "Something went wrong",
            err: error.message ?? error,
            success: false
        });
    }
})




module.exports = app;