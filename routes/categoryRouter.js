const { Router } = require("express");

const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.get("/category/:id", categoryController.getCategoryById);
categoryRouter.get("/create", categoryController.createCategoryForm);

categoryRouter.post("/create", categoryController.createCategory);

categoryRouter.get("/update/:id", categoryController.updateCategoryForm);
categoryRouter.post("/update/:id", categoryController.updateCategory);

categoryRouter.get("/delete/:id", categoryController.deleteCategory);


module.exports = categoryRouter;