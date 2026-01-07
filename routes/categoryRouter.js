const { Router } = require("express");

const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.get("/category/:id", categoryController.getCategoryById);
categoryRouter.get("/create", categoryController.createCategoryForm);

categoryRouter.post("/create", categoryController.createCategory);

module.exports = categoryRouter;