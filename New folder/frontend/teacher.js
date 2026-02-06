function generateQuestions() {
  const container = document.getElementById("questionsContainer");
  container.innerHTML = "";

  const count = parseInt(document.getElementById("questionCount").value);

  for (let i = 1; i <= count; i++) {
      const div = document.createElement("div");
      div.className = "question-block";
      div.innerHTML = `
          <h3>Question ${i}</h3>
          <label>Title:</label><br/>
          <input type="text" name="title${i}" required><br/><br/>

          <label>Description:</label><br/>
          <textarea name="description${i}"></textarea>

          <label>Input Format:</label><br/>
          <textarea name="input${i}"></textarea>

          <label>Output Format:</label><br/>
          <textarea name="output${i}"></textarea>

          <label>Sample Input:</label><br/>
          <textarea name="sampleInput${i}"></textarea>

          <label>Sample Output:</label><br/>
          <textarea name="sampleOutput${i}"></textarea>
      `;
      container.appendChild(div);
  }

  document.getElementById("submitExamBtn").style.display = "inline-block";
}

function submitExam() {
  const subject = document.getElementById("subject").value; // Get subject name
  const count = parseInt(document.getElementById("questionCount").value); // Number of questions
  const questions = []; // Array to store question data

  for (let i = 1; i <= count; i++) {
      questions.push({
          title: document.querySelector(`[name=title${i}]`).value,
          description: document.querySelector(`[name=description${i}]`).value,
          inputFormat: document.querySelector(`[name=input${i}]`).value,
          outputFormat: document.querySelector(`[name=output${i}]`).value,
          sampleInput: document.querySelector(`[name=sampleInput${i}]`).value,
          sampleOutput: document.querySelector(`[name=sampleOutput${i}]`).value
      });
  }

  const exam = { subject, questions }; // Prepare the exam object

  // Send the exam object to the backend via API call
  fetch('http://localhost:3000/api/exams/create-exam', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(exam) // Convert exam object to JSON
  })
  .then(response => response.text())
  .then(message => {
      alert(message); // Notify the user that the exam was successfully created
      window.location.reload(); // Reload the page
  })
  .catch(error => console.error('Error:', error)); // Handle errors
}