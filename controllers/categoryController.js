const db = require("../db/queries");

exports.getAllCategories = async (req, res) => {
    const categories = await db.getAllCategories();
    console.log(categories);
    res.render("categories", { categories });
};

exports.getCategoryById = async (req, res) => {
    const { id } = req.params;
    const category = await db.getCategoryById(id);
    console.log("SINGLE")
    console.log(category);
    res.end();
}

// to render the esj template for form
exports.createCategoryForm = (req,res) => {
    res.render("create_category");
    // res.end();
}

// will handle category creation
exports.createCategory = async (req, res) => {
    console.log(req.body);
    db.createCategory(req.body.name, req.body.description);
    res.redirect("/categoires");
}
