const { Router } = require("express")

const projectController = require("../controllers/projectController");

const projectRouter = Router();

projectRouter.get("/", projectController.getAllProjects);
projectRouter.get("/project/:id", projectController.getProjectById);
projectRouter.get("/create", projectController.createProjectForm);
projectRouter.post("/create", projectController.createProject);

projectRouter.get("/update/:id", projectController.updateProjectForm);
projectRouter.post("/update/:id", projectController.updateProject);

projectRouter.get("/delete/:id", projectController.deleteProject);


module.exports = projectRouter;
