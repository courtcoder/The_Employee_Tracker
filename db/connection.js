const mysql = require("mysql2");

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: "Pokedex",
    password: "Root2021",
});

module.exports = db;