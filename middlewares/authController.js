
const admin = require('../config/firebase-config');

const auth = async (req,res,next) =>{

const token = req.headers.authorization.split('')[1];
  console.log("token",token);
try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    console.log("decodeValue",decodeValue)
    if(decodeValue) {
        return next();
    }
    return res.json({message : 'Unauthorize'});
}
catch(e){
    return res.json({message : 'Internal Error'});
}

}



module.exports = auth;