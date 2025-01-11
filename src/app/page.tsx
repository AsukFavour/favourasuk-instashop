'use client'

import React from "react"
import Image from 'next/image'
import image from "../../public/assests/Shopping Sale.png";

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
      {/* Image Section */}
      <div className="mt-12">
        <Image
          src={image} // Replace with the actual path to your image
          alt="Welcome Illustration"
          className="w-64 h-auto"
        />
      </div>

      {/* Title Section */}
      <div className="text-center mt-4">
        <h1 className="text-6xl font-bold text-gray-900">Welcome</h1>
        <p className="text-gray-600 mt-2 mx-6">
          The safest platform to shop from social media vendors
        </p>
      </div>

      {/* Feature List Section */}
      <div className="mt-8 mb-24 bg-lightpurple rounded-lg border-2 border-customPurple p-4 w-4/5 max-w-md">
        <ul className="space-y-4">
          {[
            "Reach Millions of Shoppers",
            "Easy Product Listing",
            "Secure and Fast Payments",
            "Boost Your Visibility",
          ].map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-customPurple text-customPurple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-800">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className="w-full mt-20 px-4">
        <button className="w-full max-w-md py-3 bg-customPurple text-white font-semibold rounded-full shadow-md hover:bg-purple-600 transition-all">
          Get started
        </button>
      </div>

     
    </div>
  );
};

export default WelcomePage;
