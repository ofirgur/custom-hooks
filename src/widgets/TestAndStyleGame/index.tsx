import React from 'react';
import { INITIAL_GAME_STATE } from './utils/constants';
import { GameStateContextProvider } from './utils/context';
import GameOutletScreen from './components/GameOutletScreen';

const TestAndStyleGame = () => {
  return (
    <GameStateContextProvider initialState={INITIAL_GAME_STATE}>
      <GameOutletScreen />
    </GameStateContextProvider>
  );
};

export default TestAndStyleGame;
