import { GoogleGenAI, Type } from "@google/genai";
import { Game, AiPrediction } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAiPrediction = async (game: Game): Promise<AiPrediction | null> => {
  try {
    const currentTime = new Date().toLocaleTimeString();
    
    // Updated prompt to use new game properties
    const prompt = `
      You are an AI for a slot game analytics app called "Bonustime".
      Analyze the game "${game.title}" which has Volatility: ${game.volatility} and RTP: ${game.rtp}.
      The current time is ${currentTime}.
      
      Generate a fun, mock "winning prediction" for this game.
      1. Predict a "current win rate" percentage between 40% and 98%.
      2. Pick a "lucky time" range (start and end) that is near the current time.
      3. Write a short, exciting 1-sentence reason why now is a good or bad time.
      
      Return JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            winRate: { type: Type.NUMBER },
            luckyTimeStart: { type: Type.STRING },
            luckyTimeEnd: { type: Type.STRING },
            message: { type: Type.STRING },
          },
          required: ["winRate", "luckyTimeStart", "luckyTimeEnd", "message"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) return null;
    
    const result = JSON.parse(jsonText);
    
    return {
      gameId: game.id,
      winRate: result.winRate,
      message: result.message,
      luckyTimeStart: result.luckyTimeStart,
      luckyTimeEnd: result.luckyTimeEnd
    };

  } catch (error) {
    console.error("AI Prediction failed:", error);
    // Fallback if AI fails
    return {
      gameId: game.id,
      winRate: Math.floor(Math.random() * (90 - 40) + 40),
      message: "AI analysis unavailable. Luck is in your hands!",
      luckyTimeStart: "Now",
      luckyTimeEnd: "Later"
    };
  }
};