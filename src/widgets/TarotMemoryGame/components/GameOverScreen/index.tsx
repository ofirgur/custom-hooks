import React from 'react';
import { isMobile } from 'react-device-detect';
import AdSensePlaceholder from '../../../../components/AdSensePlaceholder';
import { setGameStateLocalStorage } from '../../../../localstorage';
import { STRINGS } from '../../utils/strings';
import { useGameStateContext } from '../../utils/context';
import { INITIAL_GAME_STATE, GAME_STATE_LOCAL_STORAGE_NAME } from '../../utils/constants';
import { getGamePoints } from '../../utils/logic';
import GameCardsList from './components/GameCardsList';
import GameScoreResult from './components/GameScoreResult';
import { Styled, StartOverButton, ReadMore } from './styled';

const GameOverScreen = () => {
  const { gameState } = useGameStateContext();
  const { gameLevel, gameMoves } = gameState;
  const handleStartOver = () => {
    setTimeout(() => {
      setGameStateLocalStorage(
        GAME_STATE_LOCAL_STORAGE_NAME,
        INITIAL_GAME_STATE,
        true,
      );
    }, 500);
  };

  return (
    <Styled>
      <AdSensePlaceholder />
      <GameScoreResult moves={gameMoves} points={getGamePoints(gameLevel, gameMoves)} />
      <StartOverButton onClick={handleStartOver}>
        {STRINGS.END_SCREEN.START_OVER}
      </StartOverButton>
      <ReadMore>{STRINGS.END_SCREEN.READ_MORE}</ReadMore>
      <GameCardsList gameCards={gameState.gameCards} />
      {!isMobile && <AdSensePlaceholder />}
    </Styled>
  );
};

export default GameOverScreen;
