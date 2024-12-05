import React from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUpload.css';

const FileUpload = ({ onFileUpload, error }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onFileUpload(acceptedFiles),
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'], // MIME para .xlsx
      'application/vnd.ms-excel': ['.xls'], // MIME para .xls
    },
  });

  return (
    <div className="file-upload-container">
      <div {...getRootProps()} className="file-dropzone">
        <input {...getInputProps()} />
        <p>Arrastra tu archivo Excel aquí o haz clic para seleccionarlo</p>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FileUpload;
