const express = require('express')
const app = express()
const cors = require('cors');
const animationRoutes = require('./routes/animations');
require('dotenv').config();
// import Models
require("./models/Animation");

function createServer() {
    // app.use(cors({
    //     origin: 'http://localhost:3000'
    // }));
    app.use(cors());  // This will allow all domains, adjust as necessary for security.
    // Add body parser
    app.use(express.json());
    // Add routes
    require("./routes")(app)


    // default error handler
    app.use((err, req, res, next) => {
        if (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    });
    app.use('/api/animations', animationRoutes);
    // In Express.js backend
    app.get('/api/animations', (req, res) => {
    // Fetch animations and return them
    res.json({ animations: [/* array of animations */] });
    });
    app.post('/api/animations/upload', (req, res) => {
        // Logic to handle the upload
        // Handle the upload
    res.send("Upload successful!");
      });

    return app;
}

module.exports = createServer