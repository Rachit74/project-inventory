const { Router } = require("express")

const projectController = require("../controllers/projectController");
const requireAuth = require("../middleware/requireAuth");


const projectRouter = Router();

projectRouter.get("/", projectController.getAllProjects);
projectRouter.get("/project/:id", projectController.getProjectById);

projectRouter.get("/create", requireAuth ,projectController.createProjectForm);
projectRouter.post("/create", requireAuth, projectController.createProject);

projectRouter.get("/update/:id", requireAuth, projectController.updateProjectForm);
projectRouter.post("/update/:id", requireAuth, projectController.updateProject);

projectRouter.get("/delete/:id", requireAuth, projectController.deleteProject);


module.exports = projectRouter;
