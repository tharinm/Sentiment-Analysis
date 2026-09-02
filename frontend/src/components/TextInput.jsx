import React from 'react';

export default function TextInput({ value, onChange, onSubmit, isLoading }) {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 animate-in">
      <div className="relative">
        <textarea
          className="w-full min-h-[160px] p-5 rounded-2xl glass-panel text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c084fc] resize-none transition-all duration-300"
          placeholder="Enter text to analyze its sentiment..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isLoading}
        />
        <div className="absolute bottom-4 right-4 text-xs text-gray-500">
          {value.length} characters
        </div>
      </div>
      
      <button
        onClick={onSubmit}
        disabled={isLoading || value.trim().length === 0}
        className="self-end px-8 py-3 rounded-xl bg-gradient-to-r from-[#aa3bff] to-[#c084fc] text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(170,59,255,0.4)] hover:shadow-[0_0_30px_rgba(170,59,255,0.6)]"
      >
        {isLoading ? 'Analyzing...' : 'Analyze Sentiment'}
      </button>
    </div>
  );
}
