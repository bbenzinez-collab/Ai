import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onSelect: (game: Game) => void;
  onShare?: (game: Game) => void;
  isAnalyzing: boolean;
  isActive: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, onSelect, onShare, isActive }) => {
  
  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onShare) {
        onShare(game);
    }
  };

  const winRate = game.currentWinRate || 0;

  // Color Logic
  let barColor = 'bg-red-500';
  let barShadow = 'shadow-[0_0_8px_rgba(239,68,68,0.6)]'; // Red shadow
  let textColor = 'text-[#ff4d4d]'; // Red text
  let isHot = false;

  if (winRate >= 85) {
      // 85-100%: Green
      barColor = 'bg-[#06C755]';
      barShadow = 'shadow-[0_0_12px_rgba(6,199,85,0.8)]';
      textColor = 'text-[#06C755]';
      isHot = true;
  } else if (winRate >= 75) {
      // 75-84%: Yellow
      barColor = 'bg-yellow-400';
      barShadow = 'shadow-[0_0_10px_rgba(250,204,21,0.6)]';
      textColor = 'text-yellow-400';
  } else {
      // 65-74% and below: Red
      barColor = 'bg-red-500';
      barShadow = 'shadow-[0_0_8px_rgba(239,68,68,0.6)]';
      textColor = 'text-[#ff4d4d]';
  }

  return (
    <div 
        onClick={() => onSelect(game)}
        className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
        style={{ background: game.bgGradient }}
    >
      {/* Top Half: Image - Enforced 16:9 Aspect Ratio */}
      <div className="relative w-full aspect-video overflow-hidden shrink-0 bg-black/20">
        <img 
            src={game.imgUrl} 
            alt={game.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Blinking HOT Badge (Only if Win Rate >= 85%) */}
        {isHot && (
             <div className="absolute top-3 right-3 z-10">
                 <div className="relative">
                    <div className="absolute inset-0 bg-red-600 rounded-full blur animate-pulse"></div>
                    <div className="relative bg-[#ff1a4a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
                        HOT
                    </div>
                 </div>
             </div>
        )}
      </div>

      {/* Bottom Half: Content */}
      <div className="p-4 pt-8 relative flex flex-col flex-grow">
        {/* Overlapping Icon */}
        <div className="absolute -top-6 left-4 w-14 h-14 rounded-xl bg-white p-0.5 shadow-lg overflow-hidden z-10">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
                <img src={game.iconUrl} alt="icon" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 bg-black/60 text-[6px] text-white px-1 font-bold">PG</div>
            </div>
        </div>

        {/* Text Content */}
        <h3 className="text-white font-bold text-lg leading-tight mb-1 truncate">{game.title}</h3>
        <p className="text-white/80 text-[10px] font-light leading-snug mb-4 line-clamp-2 h-8">
            {game.description}
        </p>

        {/* Win Rate Progress Bar */}
        <div className="relative mb-5">
             <div className="flex justify-between items-end mb-1">
                 <span className="text-[10px] font-medium text-white/70">MAX WIN RATE</span>
                 <span className={`text-sm font-bold ${textColor}`}>
                    {winRate}%
                 </span>
             </div>
             {/* Progress Bar Container */}
             <div className="w-full h-4 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 relative">
                 <div 
                    className={`h-full rounded-full transition-all duration-1000 ${barColor} ${barShadow} bg-stripes animate-stripes`}
                    style={{ width: `${winRate}%` }}
                 ></div>
             </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="flex flex-col">
                <span className="text-[9px] text-white/50 uppercase">VOLATILITY</span>
                <span className="text-[11px] font-bold text-white">{game.volatility}</span>
            </div>
            <div className="flex flex-col text-center">
                <span className="text-[9px] text-white/50 uppercase">RTP</span>
                <span className="text-[11px] font-bold text-white">{game.rtp}</span>
            </div>
            <div className="flex flex-col text-right">
                <span className="text-[9px] text-white/50 uppercase">MAX WIN</span>
                <span className="text-[11px] font-bold text-white">{game.maxWin}</span>
            </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto flex items-center justify-between">
            {/* Settings Icon */}
            <button className="text-white/30 hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                 </svg>
            </button>

            {/* Share Button: Image Replacement */}
            <button 
                onClick={handleShareClick}
                className="transition-transform active:scale-95 hover:brightness-110"
            >
                <img 
                    src="https://i.ibb.co/G4m8dMhK/Layer-2.png" 
                    alt="Share with LINE" 
                    className="h-10 w-auto object-contain"
                />
            </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;