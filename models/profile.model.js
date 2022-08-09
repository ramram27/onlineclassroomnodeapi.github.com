const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const {isEmail} = require('validator');
const profileModel = mongoose.model(
  "profile",
  new mongoose.Schema(
    {
      user_id: mongoose.Types.ObjectId,

    name: {
        type : String,
        required : [true, 'Please enter an name']
      },
    mobile: {
        type : Number,
        required : [true, 'Please enter an mobile']
      },
      profile_image: String,
      email: {
        type : String,
        lowercase : true,
        unique : true,
        required : [true, 'Please enter an email'],
        validate : [isEmail, 'Please enter a valid email']
   },
     pinCode: {
      type : Number,
      required : [true, 'Please enter an pincode']
    },
      
    }
  )
);

module.exports = profileModel;