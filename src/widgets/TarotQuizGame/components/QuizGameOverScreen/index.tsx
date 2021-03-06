import React from 'react';
import AdSensPlaceholder from '../../../../components/AdSensePlaceholder';
import { INITIAL_GAME_STATE, YES_NO_TAROT_URL } from '../../utils/constants';
import { STRINGS } from '../../utils/strings';
import { getGamePoints } from '../../utils/logic';
import { useGameStateContext } from '../../utils/context';
import GameScoreResult from './components/GameScoreResult';
import GameOverCardList from './components/GameOverCardsList';
import { QuizGameOverScreenStyled, StartOverButton, YesNoTarot } from './styled';

const QuizGameOverScreen = () => {
  const { gameState, setGameState } = useGameStateContext();
  const handleStartOver = () => {
    setTimeout(() => {
      setGameState(INITIAL_GAME_STATE);
    }, 1000);
  };
  const handleYesNoTarot = () => {
    setTimeout(() => {
      window.location.href = YES_NO_TAROT_URL;
    }, 1000);
  };

  return (
    <QuizGameOverScreenStyled>
      <GameScoreResult points={getGamePoints(gameState.gameMatches)} />
      <StartOverButton
        onClick={handleStartOver}
      >
        {STRINGS.END_SCREEN.START_OVER}
      </StartOverButton>
      <YesNoTarot
        onClick={handleYesNoTarot}
      >
        {STRINGS.END_SCREEN.YES_NO_TAROT}
      </YesNoTarot>
      <AdSensPlaceholder />
      <GameOverCardList matches={gameState.gameMatches} />
    </QuizGameOverScreenStyled>
  );
};

export default QuizGameOverScreen;
