import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="loader mb-4 animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500 mx-auto"></div>
        <h1 className="text-2xl font-bold text-violet-500">Loading...</h1>
      </div>
    </div>
  );
}

export default Loader;
