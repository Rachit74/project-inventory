const { Pool } = require("pg");

module.exports = new Pool( {
    host: "localhost",
    user: "postgres",
    database: 'inventory_db',
    password: 'postgres',
    port: 5432

})