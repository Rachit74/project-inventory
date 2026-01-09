const { Router } = require("express")

const profileController = require("../controllers/profileController");

const requireAuth = require("../middleware/requireAuth");

const profileRouter = Router();

profileRouter.get("/profile", requireAuth, profileController.userProfile);

profileRouter.get("/profile/update", requireAuth, profileController.updateUserForm);
profileRouter.post("/profile/update", requireAuth, profileController.updateUser);

profileRouter.get("/profile/delete", requireAuth, profileController.deleteUser);

module.exports = profileRouter;