const mongoose = require('mongoose');

const animationSchema = new mongoose.Schema({
  title: String,
  url: String,
  metadata: String,
});

module.exports = mongoose.model('Animation', animationSchema);