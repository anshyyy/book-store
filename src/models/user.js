const mongoose = require("mongoose");
const { Schema } = mongoose;
const { SALT } = require("../config/server_config");
const bcrypt = require("bcrypt");


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username : {
       type:String,
       unique:true
    },
    profilePic: {
      type: String,
    },
    password: {
      type: String,
    },
    userType : {
      type : String,
      default : "normal"
    },
    isPremium: {
      type: Boolean,
      default: false
    },
    lastDate :{
        type : Date,
        default: null
    },
    booksIssued: [
      {
        type: Schema.Types.ObjectId,
        ref: "Issue"
      }
    ]
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
    if (!this.password || !this.isModified("password")) return next();
    const encryptedPassword = bcrypt.hashSync(this.password, Number(SALT));
    this.username = this.email.split("@")[0];
    this.password = encryptedPassword;
    next();
  });
  

const User = mongoose.model("User", userSchema);
module.exports = User;