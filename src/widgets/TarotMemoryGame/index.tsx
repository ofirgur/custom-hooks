import React from 'react';
import { INITIAL_GAME_STATE } from './utils/constants';
import GameOutletScreen from './components/GameOutletScreen';
import { GameStateContextProvider } from './utils/context';

const TarotMemoryGame = () => {
  return (
    <GameStateContextProvider initialState={INITIAL_GAME_STATE}>
      <GameOutletScreen />
    </GameStateContextProvider>
  );
};

export default TarotMemoryGame;
