const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const teachereModel = mongoose.model(
  "Teacher",
  new mongoose.Schema(
    {
     user_id: mongoose.Types.ObjectId,

      teacher_idCard:  {
        type : String,
        unique : true,
        required : [true, 'Please enter an teacher id']
      },
      id_card_image: String,

      
    }
  )
);

module.exports = teachereModel;