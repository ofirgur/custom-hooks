import React, { useEffect } from 'react';
import { INITIAL_GAME_STATE, GAME_STATE_LOCAL_STORAGE_NAME } from './utils/constants';
import { getGameStateLocalStorage, removeGameStateLocalStorage } from '../../localstorage';
import { GameStateContextProvider } from './utils/context';
import GameOutletScreen from './components/QuizGameOutletScreen';

const TarotQuizGame = () => {
  const GAME_STATE_LOCAL_STORAGE = getGameStateLocalStorage(GAME_STATE_LOCAL_STORAGE_NAME);
  useEffect(() => {
    removeGameStateLocalStorage(GAME_STATE_LOCAL_STORAGE_NAME);
  }, []);

  return (
    <GameStateContextProvider initialState={GAME_STATE_LOCAL_STORAGE || INITIAL_GAME_STATE}>
      <GameOutletScreen />
    </GameStateContextProvider>
  );
};

export default TarotQuizGame;
