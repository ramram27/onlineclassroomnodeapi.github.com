const express = require("express");
const mongoose = require("mongoose");
const teacher = require('../models/teacher.model');
const Profile = require('../models/profile.model');
const teacherprofile = require('../models/teacherProfile.model');
const authController = require("../middlewares/authController");

const apiRouter = express.Router();



apiRouter.get("/teacherprofileGet:id", async (req,res)=>{
  
    const id = req.params.id;

    Profile.aggregate([

        {
            $lookup: {
                from:"teachers",
                localField: "_id",
                foreignField: "user_id",
                as: "teachersAs"
            }
        }

    ], (err, teachersAs) => {
        if (err) {
            console.log("Error: ", err)
            res.status(500).send({ message: err });
            return;
        }
        console.log("Subjects we got: ", teachersAs);
        
        for(let i=0;i<teachersAs.length;i++) {
            if(id== teachersAs[i]._id){
                var user =  teachersAs[i];
                break;
            }
        }
        res.send(JSON.stringify(user));
    })

})

apiRouter.post("/teacherprofilepost",async (req,res)=>{
   
    console.log("\n\n-----------------------------------");
    try {
     
      var dataToPost = req.body;
        console.log("DataToPost: ", dataToPost);
  
        console.log("In else condition!");
        var dataToSave = new teacherprofile({
          name: dataToPost.name,
          mobile: dataToPost. mobile,
          email: dataToPost.email,
          profile_image: dataToPost.profile_image,
          pinCode : dataToPost.pinCode,
          teacher_idCard:dataToPost.teacher_idCard,
          id_card_image:dataToPost.id_card_image,
          status_save:dataToPost.status_save
        });
        await dataToSave.save();
        console.log("Saved new data in the teacher profile model!");
        res.json(dataToSave);
      
    } catch (err) {
      console.log("Error: ", err);
      res.status(500).json({
        message: "There was an error profile.",
      });
    }
})

apiRouter.get("/teacherprofileStatusGet:id", async (req, res) => {
    var id = req.params.id;
    console.log('the id we are getting',req.params.id);
    if (!id) return res.json({ message: "Id is required!" });
    console.log('the id we are getting');
    try {
      var data = await teacherprofile.find({ _id: id });
      let dataToSend= data;
  
      console.log("data we are getting",data);
      console.log("this is data getting sne", dataToSend);
      return res.json({name:dataToSend[0].name,mobile:dataToSend[0].mobile,pinCode:dataToSend[0].pinCode,status_save:dataToSend[0].status_save});
    } catch (err) {
      console.log(err);
      return res.json({ message: "Id is invaild or record doesn't exist" });
    }
  });

module.exports = apiRouter;