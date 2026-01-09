const pool = require("./pool");

async function getUserByUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );
  return rows[0];
}

async function createUser(username, password) {
  const { rows } = await pool.query(
    "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
    [username, password]
  );
  return rows[0];
}

async function updateUser(userId, newUsername) {
  const { rows } = await pool.query(
    "UPDATE users SET username = $1 WHERE id = $2 RETURNING id, username",
    [newUsername, userId]
  );
  return rows[0];
}

async function deleteUser(userId) {
  await pool.query(
    "DELETE FROM users WHERE id = $1",
    [userId]
  );
}

module.exports = {
  getUserByUsername,
  createUser,
  updateUser,
  deleteUser,
};
