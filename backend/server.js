const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const galleryRoutes = require('./routes/galleryRoutes');
const wishesRoutes = require('./routes/wishesRoutes');
const authRoutes = require('./routes/authRoutes');
require('./config/db'); 

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/gallery', galleryRoutes);
app.use('/wishes', wishesRoutes);
app.use('/auth', authRoutes);
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

