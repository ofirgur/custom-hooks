import { GameCard, GameLevel, PacketCard } from './types';
import { GAME_POINTS } from './constants';

export const shuffleArray = (array: unknown[]) => {
  return array
    .map((a: any) => ({ sort: Math.random(), value: a }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map((a: any) => a.value);
};

export const getRandomGameCards = (numberOfCards: number, cards: GameCard[]) => {
  return cards
    .sort(() => Math.random() - Math.random())
    .slice(0, numberOfCards);
};

export const getPacketCards = (cards: GameCard[]): PacketCard[] => {
  const { length } = cards;
  const packetCards = cards.reduce((acc: PacketCard[], current, index) => {
    return [
      ...acc,
      { ...current, id: index, pairId: index + length },
      { ...current, id: index + length, pairId: index },
    ];
  }, []);

  return shuffleArray(packetCards);
};

export const getGamePoints = (level: GameLevel, moves: number) => {
  switch (level) {
    case GameLevel.Beginner:
      if (moves <= 6) return GAME_POINTS.AMAZING;
      if (moves <= 9) return GAME_POINTS.WELL_DONE;
      if (moves <= 11) return GAME_POINTS.NOT_BAD;
      if (moves <= 14) return GAME_POINTS.ALMOST;
      return GAME_POINTS.TRY_AGAIN;
    case GameLevel.Intermediate:
      if (moves <= 10) return GAME_POINTS.AMAZING;
      if (moves <= 13) return GAME_POINTS.WELL_DONE;
      if (moves <= 1) return GAME_POINTS.NOT_BAD;
      if (moves <= 19) return GAME_POINTS.ALMOST;
      return GAME_POINTS.TRY_AGAIN;
    case GameLevel.Advanced:
      if (moves <= 15) return GAME_POINTS.AMAZING;
      if (moves <= 18) return GAME_POINTS.WELL_DONE;
      if (moves <= 21) return GAME_POINTS.NOT_BAD;
      if (moves <= 24) return GAME_POINTS.ALMOST;
      return GAME_POINTS.TRY_AGAIN;
    default: return 0;
  }
};
