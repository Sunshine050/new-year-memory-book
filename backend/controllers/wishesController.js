const Wish = require('../models/wish');

exports.getWishes = (req, res) => {
    Wish.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getWish = (req, res) => {
    const { id } = req.params;
    Wish.getById(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
};

exports.addWish = (req, res) => {
    const data = req.body;
    Wish.add(data, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Wish added successfully', id: results.insertId });
    });
};

exports.updateWish = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Wish.update(id, data, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Wish updated successfully' });
    });
};

exports.deleteWish = (req, res) => {
    const { id } = req.params;
    Wish.delete(id, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Wish deleted successfully' });
    });
};
