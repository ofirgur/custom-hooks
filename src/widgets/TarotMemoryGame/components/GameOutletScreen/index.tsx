import React, { useEffect } from 'react';
import { useGameStateContext } from '../../utils/context';
import { GAME_PAGE_URL } from '../../utils/constants';
import { GameScreen } from '../../utils/types';
import MemoryGameOverScreen from '../GameOverScreen';
import MemoryGameScreen from '../GameScreen';
import MemoryGameStartScreen from '../GameStartScreen';
import { GameOutletScreenStyled } from './styled';

const GameOutletScreen = () => {
  const { gameState } = useGameStateContext();
  useEffect(() => {
    if (window.location.pathname.includes('/score') && (gameState.gameScreen === GameScreen.start || gameState.gameScreen === GameScreen.game)) {
      window.location.href = GAME_PAGE_URL;
    }
  }, []);

  const renderScreen = () => {
    switch (gameState.gameScreen) {
      case GameScreen.game:
        return <MemoryGameScreen />;
      case GameScreen.end:
        return <MemoryGameOverScreen />;
      case GameScreen.start:
      default: return <MemoryGameStartScreen />;
    }
  };

  return (
    <GameOutletScreenStyled>
      {renderScreen()}
    </GameOutletScreenStyled>
  );
};

export default GameOutletScreen;
