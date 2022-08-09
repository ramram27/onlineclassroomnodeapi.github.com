const mongoose = require("mongoose");
const {isEmail} = require('validator');

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username:  {
      type : String,
      unique : true,
      required : [true, 'Please enter an username'],
   },
    email: {
      type : String,
      lowercase : true,
      unique : true,
      required : [true, 'Please enter an email'],
      validate : [isEmail, 'Please enter a valid email']
   },
    password: {
      type : String,
      minlength : [8, 'Minimum password length is 8 character'],
      maxlength :30,
      required : [true, 'Please enter an password']
      },
    role: String,
    source: {
      type: String,
      default: "native"
    }
  })
);

module.exports = User;