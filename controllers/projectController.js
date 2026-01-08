const db = require("../db/queries");

exports.getAllProjects = async (req, res) => {
    const projects = await db.getAllProjects();
    res.render("projects.ejs", { projects });
}

exports.getProjectById = async(req, res) => {
    const { id } = req.params;
    const project = await db.getProjectById(id);

    if (!project) {
        res.status(404).render("404", {
            message: "Project not Found!"
        })
    }

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
    await db.createProject(req.body.title, req.body.description, req.body.category_id);
    console.log("Project was added!")

    res.redirect("/projects");

}


// to render the esj template for form
exports.updateProjectForm = async (req,res) => {
    const { id } = req.params;
    const project = await db.getProjectById(id);


    if (!project) {
        res.status(404).render("404", {
            message: "Project not Found!"
        })
    }
    
    const categories = await db.getAllCategories();
    res.render("update_project", { categories, project });
}

// will handle project update
exports.updateProject = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    await db.updateProject(id, req.body.title, req.body.description, req.body.category_id);
    console.log("Project was updated!")

    res.redirect(`/projects/project/${id}`);

}

//delete project controller
exports.deleteProject = async (req,res) => {
    const { id } = req.params;
    await db.deleteProject(id);
    console.log("Project was deleted!")

    res.redirect("/projects");
}
