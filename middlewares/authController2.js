
const register = require("../models/register");



const handleError = (err) =>{

    console.log(err.message,err.code);

    let errors = {email:"",password:""};
     //duplicate error
    if(err.code === 11000) {
        errors.email = 'That email is aleady registered';
        return errors;
    }

    if(err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
          errors[properties.path] = properties.message;
        });
      }
      return errors;
}

module.exports.signup_get = async (req,res) =>{
    res.render("signup");
}

module.exports.login_get = async (req,res) =>{
    res.render("login");
}

module.exports.signup_post = async (req,res) =>{

    const {email,password} = req.body;

    try{
        const reg = await register.create({email,password});
        console.log("user register",reg);
        res.status(201).json(reg)
    }
    catch (err){
        let errors = handleError(err) 
        res.status(400).json({errors});
    }
}

module.exports.login_post = async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body)
    try {
      const reg = await register.login(email,password);
      console.log("reg",reg)
      res.status(200).json(reg);
    }
    catch (err) {
     
     let errors = " email and  password is incorrect please care full login";
      res.status(400).json({errors});
    }
  }
