import React, { useState } from 'react';
import axios from 'axios';
import TreeDiagram from './components/TreeDiagram';
import FileUpload from './components/FileUpload';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [treeData, setTreeData] = useState(null);
  const [error, setError] = useState('');

  const handleFileUpload = async (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
  
    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('TreeData recibido del servidor:', response.data.arbol); 
      setTreeData(response.data.arbol);
    } catch (err) {
      setError(err.response?.data || "Error al subir el archivo");
      console.error("Error:", err.response?.data || err.message);
    }
  };
  

  return (
    <div className="App">
      <h1>Visualización del Árbol Enario</h1>
      <FileUpload onFileUpload={handleFileUpload} error={error} />
      {treeData && <TreeDiagram treeData={treeData} />}
    </div>
  );
}

export default App;
