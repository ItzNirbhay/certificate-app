import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase';

const UploadScreen = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Handle file selection
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    try {
      // Upload the selected file to Firebase Storage
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      await fileRef.put(selectedFile);

      // Get the download URL of the uploaded file
      const downloadURL = await fileRef.getDownloadURL();

      // Redirect to ProcessingScreen with the download URL
      navigate.push(`/process?fileURL=${encodeURIComponent(downloadURL)}`);
    } catch (error) {
      console.error('Error uploading file:', error.message);
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      <h1>Upload Certificate</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadScreen;
