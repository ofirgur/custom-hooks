import React from 'react';

import { STRINGS } from '../../utils/strings';
import { GameLevel } from '../../utils/types';
import AdSensePlaceholder from '../../../../components/AdSensePlaceholder';
import LevelButton from './components/LevelButton';
import { GameStartScreenStyled, ButtonsWrapper, SelectLevelTitle } from './styled';

const GameStartScreen = () => {
  return (
    <GameStartScreenStyled>
      <AdSensePlaceholder />
      <SelectLevelTitle>{STRINGS.START_SCREEN.SELECT_A_LEVEL}</SelectLevelTitle>
      <ButtonsWrapper>
        <LevelButton gameLevel={GameLevel.Beginner} />
        <LevelButton gameLevel={GameLevel.Intermediate} />
        <LevelButton gameLevel={GameLevel.Advanced} />
      </ButtonsWrapper>
    </GameStartScreenStyled>
  );
};

export default GameStartScreen;
