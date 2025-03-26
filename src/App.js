import React, { useState } from "react";
import "./App.css";

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [inputLang, setInputLang] = useState("English");
  const [outputLang, setOutputLang] = useState("Hindi");

  const languages = [
    "English",
    "Hindi",
  ];

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };


  const handleTranslate = () => {
    console.log("Translating:", text, "from", inputLang, "to", outputLang);
    setTranslatedText(`Translated text in ${outputLang}: ${text} (Mock Translation)`);
  };

  return (
    <div className="app">
      <h1>LinGoBridge AI</h1>
      
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        {pdfFile && <p>File Name: {pdfFile.name}</p>}
      </div>

      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
      />

      <div className="language-selection">
        <div>
          <label>Input Language:</label>
          <select value={inputLang} onChange={(e) => setInputLang(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Output Language:</label>
          <select value={outputLang} onChange={(e) => setOutputLang(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="translate-btn" onClick={handleTranslate}>Translate</button>
      <button className="new-chat-btn" onClick={() => {
        setText("");
        setTranslatedText("");
        setPdfFile(null);
        setInputLang("English");
        setOutputLang("Hindi");
      }}>
        New Chat
      </button>

      <div className="output-section">
        <h2>Translation Output</h2>
        <p>{translatedText || "Your translated text will appear here..."}</p>
      </div>
    </div>
  );
}

export default App;
