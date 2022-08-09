const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const sessiondataModel = mongoose.model(
  "Sessiondata",
  new mongoose.Schema(
    {
      //user_id: mongoose.Types.ObjectId,
     
      teacherName : {
          type : String,
          required : [true, 'Please enter an teacher name']
        },
        select_date : {
              type : String,
              required : [true, 'Please enter an date']
            },
        followUps:Array,
        startTime : {
              type : String,
              required : [true, 'Please enter an start time']
            },
        endTime : {
                  type : String,
                  required : [true, 'Please enter an end time']
                },
        isOnline : {
                      type : Boolean,
                      required : [true, 'Please select an status']
                    },
        description : String,
        googleMaplink : String,
        zoomlink : String,
        mobile: {
              type : Number,
              required : [true, 'Please enter an mobile']
            },
        address: String
    }
  )
);

module.exports = sessiondataModel;