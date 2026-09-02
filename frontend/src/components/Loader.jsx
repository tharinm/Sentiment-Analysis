import React from 'react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-12 animate-in">
      <div className="spinner"></div>
      <div className="text-sm text-gray-400 font-medium tracking-wider animate-pulse">
        PROCESSING
      </div>
    </div>
  );
}
