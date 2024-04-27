const express = require("express");
const app = express();
const {PORT} = require("./config/server_config");


(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started on ${PORT}`);
    })
})();