const { Router } = require("express");

const categoryController = require("../controllers/categoryController");
const requireAuth = require("../middleware/requireAuth");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.get("/category/:id", categoryController.getCategoryById);
categoryRouter.get("/create", requireAuth, categoryController.createCategoryForm);

categoryRouter.post("/create", requireAuth, categoryController.createCategory);

categoryRouter.get("/update/:id", requireAuth, categoryController.updateCategoryForm);
categoryRouter.post("/update/:id", requireAuth, categoryController.updateCategory);

categoryRouter.get("/delete/:id", requireAuth, categoryController.deleteCategory);


module.exports = categoryRouter;