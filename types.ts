export interface Game {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  iconUrl: string;
  bgGradient: string;
  badge?: string;
  volatility: string;
  rtp: string;
  maxWin: string;
  currentWinRate?: number; // 0-100, populated by AI
}

export interface AiPrediction {
  gameId: number;
  winRate: number;
  message: string;
  luckyTimeStart: string;
  luckyTimeEnd: string;
}