import React, { useEffect } from 'react';

import { useGameStateContext } from '../../utils/context';
import { GameScreen } from '../../utils/types';
import GameStartScreen from '../GameStartScreen';
import GameCardScreen from '../GameCardScreen';
import GameOverScreen from '../GameOverScreen';

const GameOutletScreen = () => {
  const { gameState, setGameState } = useGameStateContext();
  const { gameScreen } = gameState;
  console.log('GameOutletScreen - gameState: ', gameState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setGameState({
        gamePosts: json,
      }));
  };

  const renderScreen = () => {
    switch (gameScreen) {
      case GameScreen.Card: return <GameCardScreen />;
      case GameScreen.Over: return <GameOverScreen />;
      default: return <GameStartScreen />;
    }
  };
  
  return (
    <>
      {renderScreen()}
    </>
  );
};

export default GameOutletScreen;
