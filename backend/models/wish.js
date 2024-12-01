const db = require('../config/db');

const Wish = {
    getAll: (callback) => {
        db.query('SELECT * FROM wishes', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM wishes WHERE id = ?', [id], callback);
    },
    add: (data, callback) => {
        db.query('INSERT INTO wishes SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE wishes SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM wishes WHERE id = ?', [id], callback);
    }
};

module.exports = Wish;
