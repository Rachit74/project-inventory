

exports.getAllProjects = (req, res) => {
    res.send("All the projects will be shown  here");
    res.end();
}

exports.getProjectById = (req, res) => {
    const { id } = req.params;
    res.send(`This is the project with id: ${id}`);
    res.end();
}

// to render the esj template for form
exports.createProjectForm = (req,res) => {

}

// will handle project creation
exports.createProject = (req, res) => {

}
