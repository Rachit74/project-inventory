const { Router } = require("express");

const authController = require("../controllers/authController");

const authRouter  = Router();

authRouter.get("/login", authController.userLoginForm);
authRouter.post("/login", authController.userLogin);

authRouter.post("/logout", authController.logout);

module.exports = authRouter;