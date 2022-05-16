import React, { useEffect } from 'react';
import { useGameStateContext } from '../../utils/context';
import { GAME_PAGE_URL } from '../../utils/constants';
import { GameScreen } from '../../utils/types';
import QuizGameScreen from '../QuizGameScreen';
import QuizGameOverScreen from '../QuizGameOverScreen';
import { QuizGameOutletScreenStyled } from './styled';

const QuizGameOutletScreen = () => {
  const { gameState } = useGameStateContext();
  useEffect(() => {
    if (window.location.pathname.includes('/score') && gameState.gameScreen === GameScreen.game) {
      window.location.href = GAME_PAGE_URL;
    }
  }, []);
  const renderScreen = () => {
    switch (gameState.gameScreen) {
      case GameScreen.end:
        return <QuizGameOverScreen />;
      case GameScreen.game:
      default: return <QuizGameScreen />;
    }
  };

  return (
    <QuizGameOutletScreenStyled>
      {renderScreen()}
    </QuizGameOutletScreenStyled>
  );
};

export default QuizGameOutletScreen;
