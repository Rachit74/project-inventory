const { Router } = require("express")

const projectController = require("../controllers/projectController");

const projectRouter = Router();

projectRouter.get("/", projectController.getAllProjects);
projectRouter.get("/project/:id", projectController.getProjectById);
projectRouter.get("/create", projectController.createProjectForm);
projectRouter.post("/create", projectController.createProject);


module.exports = projectRouter;
