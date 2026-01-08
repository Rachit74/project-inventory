const pool = require("./pool");

// CREATE QUERIES

// create category function
async function createCategory(name, description) {
    await pool.query("INSERT INTO categories (name,description) VALUES ($1, $2)", [name,description]);
}

// create project function
async function createProject(title, description, category_id) {
    await pool.query("INSERT INTO projects (title, description, category_id) VALUES ($1, $2, $3)", [title, description, category_id]);
}

// GET QUERIES

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

// get projects by category_id
async function getProjectsByCategoryId(category_id) {
    const { rows } = await pool.query("SELECT * FROM projects where category_id = $1", [category_id]);
    return rows;
}

// UPDATE QUERIES

// update category 
async function updateCategory(id, name, description) {
    await pool.query("UPDATE categories SET name = $1, description = $2 WHERE id = $3", [name, description, id]);
}

// update project
async function updateProject(id, title, description, category_id) {
    await pool.query("UPDATE projects SET title = $1, description = $2, category_id = $3 WHERE id = $4", [title, description, category_id, id]);
}


// DELETE QUERIES
async function deleteCategory(id) {
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}

async function deleteProject(id) {
    await pool.query("DELETE FROM projects WHERE id = $1", [id]);
}

module.exports = {
    createCategory,
    getCategoryById,
    getAllCategories,
    createProject,
    getAllProjects,
    getProjectById,
    getProjectsByCategoryId,
    updateCategory,
    deleteCategory,
    updateProject,
    deleteProject,
}