const mongoose = require("mongoose");
const {DB} = require("./server_config");

(
    async()=>{
        try {
            await mongoose.connect(DB);
            // console.log("DB connected");   
        } catch (error) {
            console.log("somthing went wrong",error);
        }
    }
)();