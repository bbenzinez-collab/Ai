import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GameList from './components/GameList';
import LoginScreen from './components/LoginScreen';
import { GAMES } from './constants';
import { Game } from './types';
import { getAiPrediction } from './services/geminiService';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [games, setGames] = useState<Game[]>(GAMES);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Check for existing session
  useEffect(() => {
    const auth = localStorage.getItem('bonustime_auth');
    if (auth === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Randomize Win Rates (Immediate & Every 30 mins)
  useEffect(() => {
    const randomizeRates = () => {
      setGames(prevGames => prevGames.map(game => {
        // Generate random win rate between 40 and 98
        const randomRate = Math.floor(Math.random() * (98 - 40 + 1)) + 40;
        return { ...game, currentWinRate: randomRate };
      }));
    };

    // Run immediately
    randomizeRates();

    // Set interval for 30 minutes
    const intervalId = setInterval(randomizeRates, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('bonustime_auth', 'true');
    setIsLoggedIn(true);
  };

  const handleGameSelect = async (game: Game) => {
    // Just select for potential sharing, no need to re-analyze if we are using randomizer mode
    // strictly as per "show immediately" requirement. 
    // However, we can keep the AI service as an "extra" check if needed, 
    // but for this request, we prioritize the randomizer display.
    setSelectedGameId(game.id);
  };

  const handleShare = (game: Game) => {
    // Construct text for sharing
    const winRate = game.currentWinRate ? `${game.currentWinRate}%` : 'Calculating...';
    const shareText = `🔥 Bonustime AI Alert! 🔥\nGame: ${game.title}\nWin Rate: ${winRate}\nVolatility: ${game.volatility}\nMax Win: ${game.maxWin}\nTry your luck now!`;
    const encodedText = encodeURIComponent(shareText);
    const lineUrl = `https://line.me/R/msg/text/?${encodedText}`;

    // Try to open LINE
    window.open(lineUrl, '_blank');
    
    // Show feedback in app
    setToastMessage(`Opened LINE to share ${game.title}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-green-500 selection:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* Page Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h1 className="text-3xl font-bold text-white">All Games</h1>
            
            <div className="flex items-center gap-3">
                <div className="bg-[#222] px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 cursor-pointer hover:bg-[#333] transition">
                    <span className="text-sm text-gray-400">Sort By :</span>
                    <span className="text-sm font-bold text-white">Featured</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                
                <div className="flex bg-[#222] rounded-lg p-1 border border-white/10">
                    <button className="p-1.5 bg-white/10 rounded text-white">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                             <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                         </svg>
                    </button>
                    <button className="p-1.5 text-gray-500 hover:text-white">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                         </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* Game Grid */}
        <section>
          <GameList 
            games={games} 
            selectedId={selectedGameId || -1} // Pass -1 as no ID selected
            onSelect={handleGameSelect}
            onShare={handleShare}
            isAnalyzing={isAnalyzing}
          />
        </section>
      </main>

      {/* Footer Info */}
      <footer className="max-w-7xl mx-auto p-8 text-center text-slate-600 text-xs border-t border-white/5 mt-8">
        <p>© 2024 PG POCKET GAMES SOFT. All rights reserved.</p>
        <p className="mt-1">Predictions are for entertainment only.</p>
      </footer>

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center gap-3 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <div className="bg-green-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <span className="font-bold text-sm">{toastMessage}</span>
      </div>
    </div>
  );
}