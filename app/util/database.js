const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "database_name",
    password: "el_password"
});

module.exports = pool.promise();