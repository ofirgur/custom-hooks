import React from 'react';
import { INITIAL_GAME_STATE } from './utils/constants';
import { GameStateContextProvider } from './utils/context';
import GameOutletScreen from './components/QuizGameOutletScreen';

const TarotQuizGame = () => {
  return (
    <GameStateContextProvider initialState={INITIAL_GAME_STATE}>
      <GameOutletScreen />
    </GameStateContextProvider>
  );
};

export default TarotQuizGame;
