const express = require("express");
const mongoose = require("mongoose");
const Profile = require('../models/profile.model');
const authController = require("../middlewares/authController");


const apiRouter = express.Router();



apiRouter.post("/userprofile",async (req, res) => {
    console.log("\n\n-----------------------------------");
    try {
     
      var dataToPost = req.body;
        console.log("DataToPost: ", dataToPost);
  
        console.log("In else condition!");
        var dataToSave = new Profile({
          name: dataToPost.name,
          mobile: dataToPost. mobile,
          email: dataToPost.email,
          profile_image: dataToPost.profile_image,
          pinCode : dataToPost.pinCode
        });
        await dataToSave.save();
        console.log("Saved new data in the Student model!");
        res.json(dataToSave);
      
    } catch (err) {
      console.log("Error: ", err);
      res.status(500).json({
        message: "There was an error profile.",
      });
    }
  });


  apiRouter.get("/getuserprofile:id", async (req, res) => {
    var id = req.params.id;
    console.log('the id we are getting',req.params.id);
    if (!id) return res.json({ message: "Id is required!" });
    console.log('the id we are getting');
    try {
      var data = await Profile.find({ _id: id });
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