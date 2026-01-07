const pool = require("./pool");

// create category function
async function createCategory(name, description) {
    await pool.query("INSERT INTO categories (name,description) VALUES ($1, $2)", [name,description]);
}

// get all categoires
async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

// get category by id
async function getCategoryById(id) {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
    return rows[0];
}

// create project function
async function createProject(title, description, category_id) {
    await pool.query("INSERT INTO projects (title, description, category_id) VALUES ($1, $2, $3)", [title, description, category_id]);
}

// get all projects
async function getAllProjects() {
    const { rows } = await pool.query("SELECT * FROM projects");
    return rows;
}

// get projects by id
async function getProjectById(id) {
    const { rows } = await pool.query("SELECT * FROM projects WHERE id = $1", [id]);
    return rows[0];
}

module.exports = {
    createCategory,
    getCategoryById,
    getAllCategories,
    createProject,
    getAllProjects,
    getProjectById
}