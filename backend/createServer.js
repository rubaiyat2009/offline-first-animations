const express = require('express')
const app = express()
const cors = require('cors');
const animationRoutes = require('./routes/animations');
const multer = require('multer');
const AWS = require('aws-sdk');
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
    // app.post('/api/animations/upload', (req, res) => {
    //     // Logic to handle the upload
    //     // Handle the upload
    // res.send("Upload successful!");
    //   });

    // AWS S3 Configuration
   const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    });
  
  // Multer configuration for file uploads
  const storage = multer.memoryStorage();
  const upload = multer({ storage });

      // Upload endpoint
    app.post('/api/animations/upload', upload.single('file'), async (req, res) => {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${Date.now()}-${req.file.originalname}`,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };
  
    s3.upload(params, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      }
      res.status(200).send(data);
      res.send("Upload successful!");
    });
  });

    return app;
}

module.exports = createServer