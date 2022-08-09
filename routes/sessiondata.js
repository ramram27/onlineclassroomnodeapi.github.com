const express = require("express");
const mongoose = require("mongoose");
const Sessiondata = require("../models/sessiondata.model");
const authController = require("../middlewares/authController");


const apiRouter = express.Router();



apiRouter.post("/sessionInfoPost",async (req, res) => {
    console.log("\n\n-----------------------------------");
    try {
     
      var dataToPost = req.body;
        console.log("DataToPost: ", dataToPost);
  
        console.log("In else condition!");
        var dataToSave = new Sessiondata({
            teacherName :dataToPost.teacherName,
            select_date:dataToPost.select_date,
            followUps:dataToPost.followUps,
            startTime:dataToPost.startTime,
            endTime:dataToPost.endTime,
            isOnline:dataToPost.isOnline,
            description : dataToPost.description,
            googleMaplink:dataToPost.googleMaplink,
            zoomlink:dataToPost.zoomlink,
            mobile:dataToPost.mobile,
            address:dataToPost.address
          
        });
        await dataToSave.save();
        console.log("Saved new data in the SessionInfo model!");
        res.json(dataToSave);
      
    } catch (err) {
      console.log("Error: ", err);
      res.status(500).json({
        message: "There was an error SessionInfo model.",
      });
    }
  });


  apiRouter.get("/sessionInfoGet:id", async (req, res) => {
    var id = req.params.id;
    console.log('the id we are getting',req.params.id);
    if (!id) return res.json({ message: "Id is required!" });
    console.log('the id we are getting');
    try {
      var data = await Sessiondata.find({ _id: id });
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