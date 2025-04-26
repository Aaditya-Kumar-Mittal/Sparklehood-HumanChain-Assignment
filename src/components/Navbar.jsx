import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-violet-700 p-4 text-white">
      <div className="flex justify-between">
        <div className="font-bold font-mono text-2xl">HumanChain</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/report" className="hover:underline">Report</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
