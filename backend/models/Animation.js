const mongoose = require('mongoose');

const AnimationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  url: { type: String, required: true }
});

AnimationSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Animation', AnimationSchema);