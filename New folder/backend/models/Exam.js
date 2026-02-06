const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  inputFormat: { type: String, required: true },
  outputFormat: { type: String, required: true },
  sampleInput: { type: String, required: true },
  sampleOutput: { type: String, required: true }
});

const examSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  questions: [questionSchema], // Array of coding questions
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to teacher/admin
  createdAt: { type: Date, default: Date.now }
});

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;