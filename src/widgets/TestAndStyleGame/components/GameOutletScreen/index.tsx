import React from 'react';

import { useGameStateContext } from '../../utils/context';
import { GameScreen } from '../../utils/types';
import GameStartScreen from '../GameStartScreen';
import GameCardScreen from '../GameCardScreen';
import GameOverScreen from '../GameOverScreen';
import { GameOutletScreenStyled } from './styled';

const GameOutletScreen = () => {
  const { gameState } = useGameStateContext();
  const { gameScreen } = gameState;

  const renderScreen = () => {
    switch (gameScreen) {
      case GameScreen.Card: return <GameCardScreen />;
      case GameScreen.Over: return <GameOverScreen />;
      default: return <GameStartScreen />;
    }
  };
  
  return (
    <GameOutletScreenStyled>
      {renderScreen()}
    </GameOutletScreenStyled>
  );
};

export default GameOutletScreen;
