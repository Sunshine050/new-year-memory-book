const db = require('../config/db');

const Gallery = {
    getAll: (callback) => {
        db.query('SELECT * FROM gallery', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM gallery WHERE id = ?', [id], callback);
    },
    add: (data, callback) => {
        db.query('INSERT INTO gallery SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE gallery SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM gallery WHERE id = ?', [id], callback);
    }
};

module.exports = Gallery;
