const mysql = require('mysql2');

// Connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Katie4526*',
        database: 'election'
    },
    console.log('Connected to the employee database.')
);

module.exports = db;