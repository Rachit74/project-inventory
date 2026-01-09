const pool = require("./pool");

async function createProject(title, description, categoryId, createdBy) {
  await pool.query(
    "INSERT INTO projects (title, description, category_id, created_by) VALUES ($1, $2, $3, $4)",
    [title, description, categoryId, createdBy]
  );
}

async function getAllProjects() {
  const { rows } = await pool.query("SELECT * FROM projects");
  return rows;
}

async function getProjectById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM projects WHERE id = $1",
    [id]
  );
  return rows[0];
}

async function getProjectsByCategoryId(categoryId) {
  const { rows } = await pool.query(
    "SELECT * FROM projects WHERE category_id = $1",
    [categoryId]
  );
  return rows;
}

async function updateProject(id, title, description, categoryId) {
  await pool.query(
    "UPDATE projects SET title = $1, description = $2, category_id = $3 WHERE id = $4",
    [title, description, categoryId, id]
  );
}

async function deleteProject(id) {
  await pool.query(
    "DELETE FROM projects WHERE id = $1",
    [id]
  );
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  getProjectsByCategoryId,
  updateProject,
  deleteProject,
};
