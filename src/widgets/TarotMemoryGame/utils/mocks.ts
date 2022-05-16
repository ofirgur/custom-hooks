import { GameLevel, GameScreen } from './types';

export const mockedGameState = {
  gameLevel: GameLevel.Beginner,
  gameScreen: GameScreen.end,
  gameMoves: 7,
  gameMatches: 4,
  gameCards: [
    { name: 'The Fool', image: 'https://cdn.wazimo.com/media/images/the-fool/61828a3ede5cd.jpg', link: '' },
    { name: 'The Magician', image: 'https://cdn.wazimo.com/media/images/the-magician/61828d5956e8c.jpg', link: '' },
    { name: 'The High Priestess', image: 'https://cdn.wazimo.com/media/images/the-high-priestess/61828aeea1b59.jpg', link: '' },
    { name: 'The Empress', image: 'https://cdn.wazimo.com/media/images/the-empress/61828a2218686.jpg', link: '' }],
};

export const mockedGameCard = {
  name: 'The Fool',
  image: 'https://cdn.wazimo.com/media/images/the-fool/61828a3ede5cd.jpg',
  link: 'https://all-tarot.com/cards/the-fool/',
};

export const mockedPacketCard = {
  ...mockedGameCard,
  id: 1,
  pairId: 5,
};

export const mockedGameScore = {
  moves: 10,
  handleMoves: () => { },
  matches: 4,
  handleMatches: () => { },
};
