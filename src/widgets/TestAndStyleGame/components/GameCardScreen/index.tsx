import React from 'react';

import { useGameStateContext } from '../../utils/context';
import { GameScreen } from '../../utils/types';
import { STRINGS } from '../../utils/strings';
import { GameCardScreenStyled, TitleStyled, BodyStyled, BackBotton } from './styled';

const GameCardScreen = () => {
  const { gameState, setGameState } = useGameStateContext();

  const handleBack = () => {
    setGameState({
      gameScreen: GameScreen.Start,
      gameSelectedPost: undefined,
    });
  };

  return (
    <GameCardScreenStyled>
      <TitleStyled>{gameState.gameSelectedPost?.title}</TitleStyled>
      <BodyStyled>{gameState.gameSelectedPost?.body}</BodyStyled>
      <BackBotton onClick={handleBack}>{STRINGS.CARD_SCREEN.BACK}</BackBotton>
    </GameCardScreenStyled>
  );
};

export default GameCardScreen;
