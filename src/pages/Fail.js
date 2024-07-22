// src/SuccessPage.js
import React from 'react';
import fail from '../assets/images/fail.jpg'; // Make sure the path is correct

const Fail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img src={fail} alt="Success" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-red-500 mb-2">Transaction Failed</h1>
        <p className="text-gray-700">Your transaction failed.</p>
      </div>
    </div>
  );
};

export default Fail;
