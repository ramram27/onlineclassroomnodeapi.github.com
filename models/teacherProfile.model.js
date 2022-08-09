const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const {isEmail} = require('validator');
const teacherprofileModel = mongoose.model(
  "TeacherProfile",
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
    teacher_idCard:  {
        type : String,
        unique : true,
        required : [true, 'Please enter an teacher id']
      },
      id_card_image: String,
      status_save : String
      
    }
  )
);

module.exports = teacherprofileModel;