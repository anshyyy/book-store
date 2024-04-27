const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    PORT:process.env.PORT,
    DB:process.env.DB,
    SALT:process.env.SALT,
    JWT_KEY:process.env.JWT_KEY
}