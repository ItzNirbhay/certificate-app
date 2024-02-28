import React from 'react';

const SuccessScreen = ({ certificateInfo }) => {
  return (
    <div>
      <h2>Successfully Saved Certificate Information</h2>
      <p>Name: {certificateInfo.name}</p>
      <p>Issuing Date: {certificateInfo.issuingDate}</p>
      <p>Candidate Name: {certificateInfo.candidateName}</p>
    </div>
  );
};

export default SuccessScreen;
