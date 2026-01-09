const pool = require("./pool");

// CREATE
async function createCategory(name, description, createdBy) {
  await pool.query(
    "INSERT INTO categories (name, description, created_by) VALUES ($1, $2, $3)",
    [name, description, createdBy]
  );
}

// READ
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM categories WHERE id = $1",
    [id]
  );
  return rows[0];
}

// UPDATE
async function updateCategory(id, name, description) {
  await pool.query(
    "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
    [name, description, id]
  );
}

// DELETE
async function deleteCategory(id) {
  await pool.query(
    "DELETE FROM categories WHERE id = $1",
    [id]
  );
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
