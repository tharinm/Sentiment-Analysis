import React from 'react';

export default function ResultCard({ result }) {
  if (!result) return null;

  const isPositive = result.sentiment === 'POSITIVE';
  const confidencePercent = (result.score * 100).toFixed(1);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 rounded-2xl glass-panel animate-in flex flex-col items-center justify-center gap-4">
      <div className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
        Analysis Result
      </div>
      
      <div className="flex items-center gap-6">
        <div className={`px-6 py-2 rounded-full font-bold tracking-wide text-lg ${
          isPositive 
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
        }`}>
          {result.sentiment}
        </div>
        
        <div className="flex flex-col">
          <span className="text-3xl font-light text-white">
            {confidencePercent}<span className="text-xl text-gray-500">%</span>
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">Confidence</span>
        </div>
      </div>
    </div>
  );
}
