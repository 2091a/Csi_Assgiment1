import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsComponent = () => {
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg transform transition duration-500 hover:scale-105">
        <h3 className="text-3xl font-bold mb-6 text-center text-gray-800">Thanks for signing up<br/> Find your details below:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">First Name:</span>
            <span className="text-gray-900">{state.firstName}</span>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">Last Name:</span>
            <span className="text-gray-900">{state.lastName}</span>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">Username:</span>
            <span className="text-gray-900">{state.username}</span>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-900">{state.emailAddress}</span>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">Phone Number:</span>
            <span className="text-gray-900">{state.phoneNumber}</span>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">Country:</span>
            <span className="text-gray-900">{state.country}</span>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">City:</span>
            <span className="text-gray-900">{state.city}</span>
          </div>
          <div className="flex flex-col border-b-2 border-gray-300 pb-4">
            <span className="font-semibold text-gray-700">PAN Number:</span>
            <span className="text-gray-900">{state.panNumber}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-700">Aadhar Number:</span>
            <span className="text-gray-900">{state.aadharNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsComponent;
