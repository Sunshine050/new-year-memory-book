const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    // ค้นหาผู้ใช้จากอีเมล
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]); // ส่งผู้ใช้คนแรกที่เจอ
        });
    },

    // สร้างผู้ใช้ใหม่
    create: (email, password, name, callback) => {
        const hashedPassword = bcrypt.hashSync(password, 10); // เข้ารหัสรหัสผ่าน
        const query = 'INSERT INTO users (email, password, name) VALUES (?, ?, ?)';
        db.query(query, [email, hashedPassword, name], (err, results) => {
            if (err) return callback(err);
            callback(null); // ไม่ต้องส่งข้อมูลอะไรกลับเมื่อสร้างเสร็จ
        });
    },

    // ดึงข้อมูลผู้ใช้ทั้งหมด
    getAll: (callback) => {
        const query = 'SELECT * FROM users';
        db.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results); // ส่งข้อมูลผู้ใช้ทั้งหมด
        });
    },

    // ค้นหาผู้ใช้ตาม id
    findById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]); // ส่งผู้ใช้ที่ตรงกับ id
        });
    }
};

module.exports = User;
