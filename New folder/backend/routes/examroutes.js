const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam'); // Import the Exam model

// Endpoint to create an exam
router.post('/create-exam', async (req, res) => {
    const newExam = new Exam(req.body); // Create a new Exam using the data from teacher.js
    await newExam.save(); // Save the exam in MongoDB
    res.send('Exam created successfully!'); // Response sent back to the frontend
});

router.get('/get-exams', async (req, res) => {
    const exams = await Exam.find();
    res.json(exams);
});

module.exports = router;