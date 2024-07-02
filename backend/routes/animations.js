// routes/animations.js
const express = require('express');
const Animation = require('../models/Animation');
const router = express.Router();

// Post an animation
router.post('/upload', async (req, res) => {
  const { name, description, url } = req.body;
  try {
    const newAnimation = new Animation({ name, description, url });
    await newAnimation.save();
    res.status(201).send(newAnimation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all animations
router.get('/', async (req, res) => {
  try {
    const animations = await Animation.find();
    res.status(200).send(animations);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;