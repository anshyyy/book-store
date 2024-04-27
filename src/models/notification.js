const mongoose = require('mongoose');


const notifiationSchema = new mongoose.Schema({
    title : {
        type:String,
        required :true
    }
},{timestamps:true});

const notification = mongoose.model("notification",notifiationSchema);
module.exports = notification; 