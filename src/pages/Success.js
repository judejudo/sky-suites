// src/SuccessPage.js
import React from 'react';
import success from '../assets/images/success.jpg'; // Make sure the path is correct

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <img src={success} alt="Success" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-green-500 mb-2">Transaction Successful</h1>
        <p className="text-gray-700">Your transaction has been completed successfully.</p>
      </div>
    </div>
  );
};

export default Success;
