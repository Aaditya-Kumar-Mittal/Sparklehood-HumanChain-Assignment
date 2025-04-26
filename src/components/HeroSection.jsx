import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/image2.jpg';

function HeroSection() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center h-[80vh] p-10 m-10 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-6xl font-bold mb-6 text-white font-mono">Welcome to HumanChain</h1>
      <p className="text-lg mb-8 text-white">Building a safer, human-centric AI world for everyone.</p>
      <Link to="/dashboard">
        <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded">
          View Incidents
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;
