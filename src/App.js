import React, { useState } from 'react';
import CertificateUpload from './components/CertificateUpload';
import ProcessingScreen from './components/ProcessingScreen';
import UploadScreen from './components/UploadScreen';
import SuccessScreen from './components/SuccessScreen';

const App = () => {
  const [extractedText, setExtractedText] = useState(null);
  const [processingData, setProcessingData] = useState(null);

  const handleUploadSuccess = (text) => {
    // Handle the extracted text, you might want to parse it or perform further actions
    setExtractedText(text);

    // Assume you need to set some processing data based on the extracted text
    // This is just a placeholder, you'll need to adjust it based on your requirements
    setProcessingData({
      name: 'John Doe',
      date: '2022-03-01',
      // ... other data
    });
  };

  return (
    <div>
      <h1>Certificate Processing App</h1>

      {!extractedText && <CertificateUpload onUploadSuccess={handleUploadSuccess} />}

      {extractedText && !processingData && <ProcessingScreen extractedText={extractedText} />}

      {processingData && <UploadScreen data={processingData} />}

      {/* Assume there's a condition to show the SuccessScreen */}
      {processingData && <SuccessScreen processedData={processingData} />}
    </div>
  );
};

export default App;
