const mongoose = require("mongoose");
const fairSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    books : []
});

const fairModel = mongoose.model("fair",fairSchema);
module.exports = fairModel;