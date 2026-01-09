const { Router } = require("express");

const authController = require("../controllers/authController");

const authRouter  = Router();

authRouter.get("/login", authController.userLoginForm);
authRouter.post("/login", authController.userLogin);

authRouter.get("/logout", authController.logout);

authRouter.get("/signup", authController.userSignupForm);
authRouter.post("/signup", authController.userSignup);

module.exports = authRouter;