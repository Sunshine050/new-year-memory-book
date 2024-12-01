const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'new_year_memory_book'
});

connection.connect((err) => {
    if (err) {
        const currentTime = new Date().toLocaleString(); // เวลาในรูปแบบท้องถิ่น
        console.error(`[${currentTime}] Error connecting to MySQL database: ${err.message} ⚠️`);
        throw err;
    }
    console.log('Connected to MySQL database. 🎉📚');
});

module.exports = connection;
