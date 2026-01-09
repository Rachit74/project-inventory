const db = require("../db");

exports.getAllCategories = async (req, res) => {
    const categories = await db.categories.getAllCategories();
    console.log("All Categories")
    console.log(categories);
    res.render("categories", { categories });
};

exports.getCategoryById = async (req, res) => {
    const { id } = req.params;
    const category = await db.categories.getCategoryById(id);

    if (!category) {
        res.status(404).render("404", {
            message: "Category not Found!"
        })
    }

    const projects = await db.projects.getProjectsByCategoryId(id);
    res.render("category_single", {category, projects});
    console.log("About Category: ");
    console.log(category);
    console.log("Projects under Category: ");
    console.log(projects);
}

// to render the esj template for form
exports.createCategoryForm = (req,res) => {
    res.render("create_category");
}

// will handle category creation
exports.createCategory = async (req, res) => {
    console.log(req.body);
    await db.categories.createCategory(req.body.name, req.body.description);
    res.redirect("/categories");
}

// to render the esj template for form
exports.updateCategoryForm = async (req,res) => {
    const { id } = req.params;
    const category = await db.categories.getCategoryById(id);

    if (!category) {
        res.status(404).render("404", {
            message: "Category not Found!"
        })
    }

    console.log(category);
    res.render("update_category", { category });
}

exports.updateCategory = async (req,res) => {
    const { id } = req.params;
    console.log(req.body);
    await db.categories.updateCategory(id, req.body.name, req.body.description);
    console.log("Record Update!")
    res.redirect(`/categories/category/${id}`)
}

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    await db.categories.deleteCategory(id);
    console.log("Category Deleted!")
    res.redirect("/categories");
}
