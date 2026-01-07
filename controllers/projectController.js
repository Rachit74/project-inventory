const db = require("../db/queries");

exports.getAllProjects = async (req, res) => {
    const projects = await db.getAllProjects();
    res.render("projects.ejs", { projects });
}

exports.getProjectById = async(req, res) => {
    const { id } = req.params;
    const project = await db.getProjectById(id);
    console.log(project)
    res.render("project_single", { project })
}

// to render the esj template for form
exports.createProjectForm = async (req,res) => {
    const categories = await db.getAllCategories();
    res.render("create_project", { categories });
}

// will handle project creation
exports.createProject = async (req, res) => {
    console.log(req.body);
    db.createProject(req.body.title, req.body.description, req.body.category_id);
    console.log("Project was added!")

    res.redirect("/");

}
