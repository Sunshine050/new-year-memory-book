const express = require('express');
const router = express.Router();
const wishesController = require('../controllers/wishesController');

// Get all wishes
router.get('/', wishesController.getWishes);

// Get a specific wish by id
router.get('/:id', wishesController.getWish);

// Add a new wish
router.post('/request', wishesController.addWish);

// Update a specific wish by id
router.put('/update/:id', wishesController.updateWish);

// Delete a specific wish by id
router.delete('/delete/:id', wishesController.deleteWish);

module.exports = router;
