import { GameCard, GameMatch } from './types';

export const shuffleArray = (array: any[]) => {
  return array
    .map((a: any) => ({ sort: Math.random(), value: a }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map((a: any) => a.value);
};

const getRandom = (n: number, array: any) => {
  return array
    .sort(() => Math.random() - Math.random())
    .slice(0, n);
};

export const getRandomGameCards = (numberOfCards: number, numberOfQuizCards: number, cards: GameCard[]) => {
  return getRandom(numberOfCards, cards)
    .map((card: GameCard) => ({
      ...card,
      quizCards: shuffleArray([
        card,
        ...getRandom(numberOfQuizCards, cards.filter(c => c.name !== card.name)),
      ]),
    }));
};

export const getGamePoints = (matches: GameMatch[]) => {
  return matches
    .filter((match: GameMatch) => match.gameCard.name === match.matchName)
    .length * 200;
};
