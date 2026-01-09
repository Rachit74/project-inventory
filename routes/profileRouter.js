const { Router } = require("express")

const profileController = require("../controllers/profileController");

const profileRouter = Router();

profileRouter.get("/profile", profileController.userProfile);

module.exports = profileRouter;