const { Router } = require("express");

const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.get("/category/:id", categoryController.getCategoryById);

module.exports = categoryRouter;