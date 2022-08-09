const express = require("express");
const apiRouter = express.Router();

const authrouter = require("./routes/authrouter");
//const user = require("./routes/user");
const profile = require('./routes/profile');
const teacher = require('./routes/teacher');
const Sessiondata = require('./routes/sessiondata');
const teacherprofile = require('./routes/teacherProfile');

apiRouter.use("/Signupuser",authrouter);
//apiRouter.use('/User', user);
apiRouter.use('/profile',profile);
apiRouter.use('/Teacher',teacher);
apiRouter.use('/Sessiondata',Sessiondata );
apiRouter.use('/TeacherProfile',teacherprofile);

module.exports = apiRouter;
