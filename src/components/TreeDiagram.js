import React from 'react';
import Tree from 'react-d3-tree';

const TreeDiagram = ({ treeData }) => {
  // Ajusta el formato de datos si `treeData` no está en el formato esperado por react-d3-tree
  const transformData = (data) => {
    return data.map(node => ({
      name: node.name,
      children: node.children ? transformData(node.children) : [],
    }));
  };

  // Si `treeData` no es un array, transformarlo en el formato necesario
  const formattedTreeData = Array.isArray(treeData) ? treeData : transformData([treeData]);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Tree data={formattedTreeData} orientation="vertical" />
    </div>
  );
};

export default TreeDiagram;
