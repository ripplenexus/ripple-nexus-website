const express = require('express');
const router = express.Router();
const Form = require('../models/Form');  // Import the Form model

// Handle form submission
router.post('/submit-form', async (req, res) => {
  const { name, surname, email, message, service } = req.body;

  try {
    const newForm = new Form({ name, surname, email, message, service });
    await newForm.save();
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting form');
  }
});

module.exports = router;
