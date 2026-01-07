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

module.exports = {
    createCategory,
    getCategoryById,
    getAllCategories
}