const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'MYSQL##rajkumar@1234'
});

module.exports = pool.promise();
