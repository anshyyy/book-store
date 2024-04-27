const express = require("express");
const app = express();
const db = require("./config/db");
const {PORT} = require("./config/server_config");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");


(()=>{
    app.use(cors({
        origin: 'http://localhost:3000', // Include cookies in CORS requests if needed
      }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use("/api",apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server Started on ${PORT}`);
    });
})();