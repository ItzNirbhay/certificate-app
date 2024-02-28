import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const CertificateUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const image = file;

    try {
      const { data: { text } } = await Tesseract.recognize(image, 'eng');
      
      // Send extracted text to the next step
      onUploadSuccess(text);
    } catch (error) {
      console.error('Error uploading certificate:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Certificate</button>
    </div>
  );
};

export default CertificateUpload;
