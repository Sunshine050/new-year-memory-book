const Gallery = require('../models/gallery');

exports.getGallery = (req, res) => {
    Gallery.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.getGalleryItem = (req, res) => {
    const { id } = req.params;
    Gallery.getById(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results[0]);
    });
};

exports.addGalleryItem = (req, res) => {
    const data = req.body;
    Gallery.add(data, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Gallery item added successfully', id: results.insertId });
    });
};

exports.updateGalleryItem = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Gallery.update(id, data, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Gallery item updated successfully' });
    });
};

exports.deleteGalleryItem = (req, res) => {
    const { id } = req.params;
    Gallery.delete(id, (err) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Gallery item deleted successfully' });
    });
};
