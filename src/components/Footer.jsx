import { useState, useEffect } from 'react';
import { getJoke } from '../services/jokeService';

const Footer = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNewJoke = async () => {
    setLoading(true);
    const data = await getJoke();
    setJoke(data);
    setLoading(false);
  };

  useEffect(() => {
    let ignore = false;
    const initJoke = async () => {
      setLoading(true);
      const data = await getJoke();
      if (!ignore) {
        setJoke(data);
        setLoading(false);
      }
    };
    initJoke();
    return () => { ignore = true; };
  }, []);

  return (
    <footer className="sticky bottom-0 mt-auto bg-white/90 backdrop-blur-sm border-t border-slate-200 p-4 shadow-[0_-4px_15px_rgba(0,0,0,0.03)] flex justify-between items-center z-40 rounded-t-2xl">
      {/* Center: Joke text */}
      <div className="flex-1 text-center px-4">
        {loading ? (
          <p className="text-slate-500 italic">Finding something funny...</p>
        ) : joke ? (
          <div className="text-slate-800">
            <span className="font-semibold text-lg">"{joke.setup}"</span>
            <span className="block text-violet-600 italic font-medium mt-1">— {joke.punchline}</span>
          </div>
        ) : (
          <p className="text-rose-500 italic">Failed to load joke. Try again!</p>
        )}
      </div>
      
      {/* Right side: Reload Button */}
      <div className="flex items-center">
        <button
          onClick={fetchNewJoke}
          disabled={loading}
          className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-sm shadow-violet-100 active:scale-95 flex items-center gap-2"
        >
          {loading ? (
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
          )}
          <span>New Joke</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
