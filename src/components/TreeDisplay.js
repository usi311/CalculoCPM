import React from 'react';
import './TreeDisplay.css'; 

const TreeDisplay = ({ arbol }) => {
  return (
    <div className="tree-display-container">
      <h2>Diagrama Generado</h2>
      <pre className="tree-content">{JSON.stringify(arbol, null, 2)}</pre>
    </div>
  );
};

export default TreeDisplay;
