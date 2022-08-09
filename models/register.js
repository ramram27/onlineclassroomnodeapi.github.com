// const mongoose = require("mongoose");
// var Schema = mongoose.Schema;
// const {isEmail} = require('validator');
// var bcrypt = require('bcrypt');


// const registerModel = mongoose.model(
//   "Register",
//   new mongoose.Schema(
//     {
      
//       email: {
//         type : String,
//         lowercase : true,
//         unique : true,
//         required : [true, 'Please enter an email'],
//         validate : [isEmail, 'Please enter a valid email']
//    },

//    password : {
//     type : String,
//     required : [true,'Please enter password'],
//     minlength : [8, 'Minimum password length is 8 character'],
//     maxlength :15
//    }
    
      
//     }
//   )
// );

// registerModel.pre('save', async (next)=>{

//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password,salt);
//     next();
// });

// registerModel.statics.login = async (email,password) =>{

//     const user = await this.findOne({email});

//     if(user) {
//         const auth = await bcrypt.compare(password,this.password);

//         if(auth) {
//             return user;
//         }
//         throw Error("Incorrect password");
//     }
//     throw Error("Incorrect email");
// }

// module.exports = registerModel;


const mongoose = require('mongoose');
const {isEmail} = require('validator');
var bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

//create user scheam
 const signupSchema = new Schema({
   
  email:{
    type: String,
    unique : true,
    lowercase : true,
    required : [true,  'Please enter an email'],
    validate : [isEmail, 'Please enter a valid email']
    },

  password:{
    type : String,
    minlength : [8, 'Minimum password length is 8 character'],
    maxlength :15,
    required : [true, 'Please enter an password']
    },
  
 });

//password convert in hashcode
signupSchema.pre('save', async function (next) {
   const salt = await bcrypt.genSalt();
   this.password = await bcrypt.hash(this.password, salt);
   next();
 });

 // user login find email exit and compaire password
 signupSchema.statics.login = async function(email, password) {
   const user = await this.findOne({email});
   console.log("user",user)
   if(user) {
   const auth = await bcrypt.compare(password,user.password);
   console.log("auth",auth);
   if(auth) {
     return user;
   }
    throw Error ('incorrect password');
   }
   throw Error('incorrect email');
 }
 


const SignupSchema = mongoose.model('Signupuser', signupSchema);

module.exports = SignupSchema;