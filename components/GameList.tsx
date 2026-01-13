import React from 'react';
import { Game } from '../types';
import GameCard from './GameCard';

interface GameListProps {
  games: Game[];
  selectedId: number | string;
  onSelect: (game: Game) => void;
  onShare?: (game: Game) => void;
  isAnalyzing: boolean;
}

const GameList: React.FC<GameListProps> = ({ games, selectedId, onSelect, onShare, isAnalyzing }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <GameCard 
            key={game.id} 
            game={game}
            onSelect={onSelect}
            onShare={onShare}
            isAnalyzing={isAnalyzing}
            isActive={game.id === selectedId}
        />
      ))}
    </div>
  );
};

export default GameList;