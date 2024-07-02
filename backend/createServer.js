const express = require('express')
const app = express()
const cors = require('cors');
const animationRoutes = require('./routes/animations');
require('dotenv').config();
// import Models
require("./models/Animation");

function createServer() {
    app.use(cors({}));
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

    return app;
}

module.exports = createServer