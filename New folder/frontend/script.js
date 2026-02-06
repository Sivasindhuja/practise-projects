let editor; 

document.addEventListener('DOMContentLoaded', () => {
    require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.1/min/vs' } });

    require(['vs/editor/editor.main'], function () {
        editor = monaco.editor.create(document.getElementById('editor'), {
            value: "// Write your code here!",
            language: "javascript",
            theme: "vs-dark"
        });
        console.log('Editor initialized:', editor); // Debug Monaco Editor instance
    });
});


document.getElementById('languageSelector').addEventListener('change', (event) => {
    const newLanguage = event.target.value;
    const model = monaco.editor.getModels()[0];
    if (model) {
        monaco.editor.setModelLanguage(model, newLanguage);
    }
});


document.getElementById('run').addEventListener('click', async () => {
    const code = editor.getValue(); 
    const language = document.getElementById('languageSelector').value; // Selected language

    try {
        const response = await fetch('http://localhost:3000/execute-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, language })
        });

        const data = await response.json(); 
        document.getElementById('output').textContent = data.output || data.error; // Display output or error
    } catch (error) {
        console.error('Execution failed:', error.response?.data || error.message);
        document.getElementById('output').textContent = 'Execution failed. Check console for details.';
    }
});