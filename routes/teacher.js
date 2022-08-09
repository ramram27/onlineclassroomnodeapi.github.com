const express = require("express");
const mongoose = require("mongoose");
const Teacher = require('../models/teacher.model');
const Profile = require('../models/profile.model');
const authController = require("../middlewares/authController");

const apiRouter = express.Router();




apiRouter.post("/postteacherInfo:id",async (req, res) => {
    console.log("\n\n-----------------------------------");
    var userId = req.params.id;

    //const user_id = await Profile.findOne({_id: userId });

    try {
     
      var dataToPost = req.body;
        console.log("DataToPost: ", dataToPost);
  
        console.log("In else condition!");
        var dataToSave = new Teacher({
          user_id: mongoose.Types.ObjectId(userId),
            teacher_idCard: dataToPost.teacher_idCard,
            id_card_image: dataToPost.id_card_image
        });
        await dataToSave.save();
        console.log("Saved new data in the Techer model!");
        res.json(dataToSave);
      
    } catch (err) {
      console.log("Error: ", err);
      res.status(500).json({
        message: "There was an error techer model.",
      });
    }
  });


  apiRouter.get("/getteacherInfo:id", async (req, res) => {
    var id = req.params.id;
    console.log('the id we are getting',req.params.id);
    if (!id) return res.json({ message: "Id is required!" });
    console.log('the id we are getting');
    try {
      var data = await Teacher.find({ _id: id });
      let dataToSend= data;
  
      console.log("data we are getting",data);
      console.log("this is data getting sne", dataToSend);
      return res.json(dataToSend);
    } catch (err) {
      console.log(err);
      return res.json({ message: "Id is invaild or record doesn't exist" });
    }
  });


  module.exports = apiRouter;