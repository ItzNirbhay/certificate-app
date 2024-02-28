import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const ProcessingScreen = ({ extractedText }) => {
  const [certificateInfo, setCertificateInfo] = useState(null);

  useEffect(() => {
    // Parse the extracted text and map it to relevant form elements
    const parsedInfo = parseCertificateText(extractedText);

    // Save information to Firebase
    saveToFirebase(parsedInfo);
    
    // Set the certificate information state
    setCertificateInfo(parsedInfo);
  }, [extractedText]);

  const parseCertificateText = (text) => {
    // Implement your logic to parse the extracted text and map it to relevant form elements
    // Example:
    const [name, issuingDate, candidateName] = text.split('\n');
    
    return {
      name,
      issuingDate,
      candidateName,
    };
  };

  const saveToFirebase = (info) => {
    // Save the information to Firebase Realtime Database
    const databaseRef = firebase.database().ref('certificates');
    const newCertificateRef = databaseRef.push();
    newCertificateRef.set(info);
  };

  return (
    <div>
      {certificateInfo ? (
        <div>
          <h2>Successfully Saved Certificate Information</h2>
          <p>Name: {certificateInfo.name}</p>
          <p>Issuing Date: {certificateInfo.issuingDate}</p>
          <p>Candidate Name: {certificateInfo.candidateName}</p>
        </div>
      ) : (
        <p>Processing...</p>
      )}
    </div>
  );
};

export default ProcessingScreen;
