const exams = JSON.parse(localStorage.getItem("exams")) || [];
const examListDiv = document.getElementById("examList");
const questionDetailsDiv = document.getElementById("questionDetails");
let editorInstance;
let currentLanguage = "javascript"; // Default language
let selectedQuestion = JSON.parse(localStorage.getItem("selectedQuestion")) || null;

// Monaco Editor configuration
require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs" } });

// Change language in Monaco editor
function changeLanguage(language) {
  currentLanguage = language;
  if (!editorInstance) return;
  monaco.editor.setModelLanguage(editorInstance.getModel(), mapLang(language));
}

// Map language to Monaco-supported languages
function mapLang(lang) {
  switch (lang) {
    case "cpp": return "cpp";
    case "c": return "c";
    case "python": return "python";
    case "java": return "java";
    case "javascript":
    default: return "javascript";
  }
}

// Render question details and Monaco editor
function renderQuestionDetails(examIndex, questionIndex) {
  // Restrict switching between questions
  if (selectedQuestion && (selectedQuestion.examIndex !== examIndex || selectedQuestion.questionIndex !== questionIndex)) {
    alert("You can only attempt one question. You have already selected a different question.");
    return;
  }

  // First time selection, store selected question
  if (!selectedQuestion) {
    selectedQuestion = { examIndex, questionIndex };
    localStorage.setItem("selectedQuestion", JSON.stringify(selectedQuestion));
  }

  const exam = exams[examIndex];
  const question = exam.questions[questionIndex];

  // Render question details
  questionDetailsDiv.innerHTML = `
    <h3>${question.title}</h3>
    <p><strong>Description:</strong> ${question.description}</p>
    <p><strong>Input Format:</strong> ${question.input}</p>
    <p><strong>Output Format:</strong> ${question.output}</p>
    <p><strong>Sample Input:</strong> ${question.sampleInput}</p>
    <p><strong>Sample Output:</strong> ${question.sampleOutput}</p>
    <label for="languageSelect"><strong>Choose Language:</strong></label>
    <select id="languageSelect" onchange="changeLanguage(this.value)">
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="cpp">C++</option>
      <option value="c">C</option>
      <option value="java">Java</option>
    </select>
    <div id="monacoEditor" style="height:400px; border:1px solid #ccc;"></div>
    <br/>
    <button onclick="testCode()">Test</button>
    <button onclick="submitCode('${exam.subject}', ${questionIndex})">Submit</button>
    <pre id="outputArea"></pre>
  `;

  questionDetailsDiv.style.display = "block";

  // Initialize Monaco Editor for code editing
  require(["vs/editor/editor.main"], function () {
    if (editorInstance) editorInstance.dispose();
    editorInstance = monaco.editor.create(document.getElementById("monacoEditor"), {
      value: getStarterCode(currentLanguage),
      language: mapLang(currentLanguage),
      theme: "vs-dark",
      automaticLayout: true
    });
  });
}

// Starter code template for each language
function getStarterCode(lang) {
  switch (lang) {
    case "python": return "# Write Python code here";
    case "cpp": return "#include<iostream>\nusing namespace std;\nint main() {\n  return 0;\n}";
    case "c": return "#include<stdio.h>\nint main() {\n  return 0;\n}";
    case "java": return "public class Main {\n  public static void main(String[] args) {\n    \n  }\n}";
    case "javascript":
    default: return "// Write JavaScript code here";
  }
}

// Test code by submitting to Judge0 API
async function testCode() {
  const code = editorInstance ? editorInstance.getValue() : "";
  const languageMap = {
    "c": 50,
    "cpp": 54,
    "java": 62,
    "python": 71,
    "javascript": 63
  };
  const language_id = languageMap[currentLanguage];

  const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "d3016e312dmshd7bf0a1d6e6862ep137d78jsndd487951e27d", // Your RapidAPI key here
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
    },
    body: JSON.stringify({
      language_id,
      source_code: code
    })
  });

  const result = await response.json();
  document.getElementById("outputArea").textContent = result.stdout || result.stderr || "No output";
}

// Submit code to backend or Judge0 API
function submitCode(subject, index) {
  const code = editorInstance ? editorInstance.getValue() : "";
  alert(`Code submitted for "${subject} - Question ${index + 1}" in ${currentLanguage.toUpperCase()}`);
  editorInstance.setValue(getStarterCode(currentLanguage));
  document.getElementById("outputArea").textContent = "";
}

// Display exams and questions
if (exams.length === 0) {
  examListDiv.innerHTML = "<p>No exams available.</p>";
} else {
  exams.forEach((exam, examIndex) => {
    const examDiv = document.createElement("div");
    examDiv.innerHTML = `<h2>${exam.subject}</h2>`;

    exam.questions.forEach((q, questionIndex) => {
      const btn = document.createElement("button");
      btn.innerText = `Question ${questionIndex + 1}`;
      btn.onclick = () => renderQuestionDetails(examIndex, questionIndex);

      // Disable other buttons if one question is already selected
      if (
        selectedQuestion &&
        (selectedQuestion.examIndex !== examIndex || selectedQuestion.questionIndex !== questionIndex)
      ) {
        btn.disabled = true;
      }

      examDiv.appendChild(btn);
    });

    examListDiv.appendChild(examDiv);
  });
}
