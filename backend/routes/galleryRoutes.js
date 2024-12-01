const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// Get all gallery items
router.get('/', galleryController.getGallery);

// Get a specific gallery item by id
router.get('/gallery/:id', galleryController.getGalleryItem);

// Add a new gallery item
router.post('/request', galleryController.addGalleryItem);

// Update a specific gallery item by id
router.put('/update/:id', galleryController.updateGalleryItem);

// Delete a specific gallery item by id
router.delete('/delete/:id', galleryController.deleteGalleryItem);

module.exports = router;
