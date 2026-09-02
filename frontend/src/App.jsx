import { useState } from 'react';
import TextInput from './components/TextInput';
import ResultCard from './components/ResultCard';
import Loader from './components/Loader';
import { analyzeSentiment } from './api/sentiment';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeSentiment(text);
      setResult(data);
    } catch (err) {
      setError(err.message || 'An error occurred during analysis.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center mb-16 animate-in text-center">
        <div className="inline-block px-4 py-1.5 rounded-full glass-panel text-[#c084fc] text-xs font-semibold tracking-widest uppercase mb-6 border-[#c084fc]/30">
          Neural Interface v1.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
          Sentiment Analysis
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
          Enter your text below to analyze its emotional tone using our advanced Hugging Face DistilBERT model.
        </p>
      </div>

      <TextInput 
        value={text} 
        onChange={setText} 
        onSubmit={handleAnalyze} 
        isLoading={isLoading} 
      />

      {error && (
        <div className="mt-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 animate-in max-w-2xl w-full text-center">
          {error}
        </div>
      )}

      {isLoading && <Loader />}
      
      {!isLoading && result && <ResultCard result={result} />}
    </div>
  );
}

export default App;
