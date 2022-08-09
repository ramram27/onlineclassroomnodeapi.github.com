
const express = require("express");
const apiRouter = express.Router();
const authController2 = require("../middlewares/authController2");

apiRouter.get("/signup",authController2.signup_get);
apiRouter.post('/signup',authController2.signup_post);
apiRouter.get("/login",authController2.login_get);
apiRouter.post("/login",authController2.login_post);

module.exports = apiRouter;