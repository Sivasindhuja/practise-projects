const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const mongoose=require('mongoose')
const examRoutes = require("./routes/examroutes.js");

const app = express();
app.use('/api/exams', examRoutes);


app.use(bodyParser.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for cross-origin requests

const languageMap = {
    python: 71, // Python 3
    javascript: 63, // Node.js
    java: 62, // Java (OpenJDK 13)
    cpp: 53, // C++ (GCC 9.2.0)
    c: 50    // C (GCC 9.2.0)
};

// Endpoint to handle code execution
app.post('/execute-code', async (req, res) => {
    const { code, language } = req.body;
    const langId = languageMap[language];

    // Check if the language is supported
    if (!langId) {
        return res.status(400).json({ error: 'Unsupported language' });
    }

    try {
        // Send code to Judge0 API
        const submissionResponse = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
            source_code: code,
            language_id: langId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'd3016e312dmshd7bf0a1d6e6862ep137d78jsndd487951e27d' // Replace with your Judge0 API key
            }
        });

        const token = submissionResponse.data.token;

        // Wait for execution before retrieving result
        await new Promise(resolve => setTimeout(resolve, 3000)); // Delay 3 seconds

        const result = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
            headers: { 'X-RapidAPI-Key': 'd3016e312dmshd7bf0a1d6e6862ep137d78jsndd487951e27d' } // Use your API key here too
        });

        // Send execution result to the frontend
        res.json({ output: result.data.stdout || result.data.stderr || 'No output' });

    } catch (error) {
        console.error('Execution failed:', error.response?.data || error.message);
        res.status(500).json({ error: 'Execution failed' });
    }
});
mongoose.connect('mongodb://127.0.0.1:27017/examDB')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Failed', err));



// Endpoint to create an exam


// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});