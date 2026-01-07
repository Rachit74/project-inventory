const { Router } = require("express")

const projectController = require("../controllers/projectController");

const projectRouter = Router();

projectRouter.get("/", projectController.getAllProjects);
projectRouter.get("/project/:id", projectController.getProjectById);

module.exports = projectRouter;
