import React, { useState } from 'react';
import begginerImage from '../../../../assets/images/beginner.png';
import intermediateImage from '../../../../assets/images/intermediate.png';
import advancedImage from '../../../../assets/images/advanced.png';
import { GAME_STATE_LOCAL_STORAGE_NAME, STRING_PER_LEVEL } from '../../../../utils/constants';
import { setGameStateLocalStorage } from '../../../../../../localstorage';
import { STRINGS } from '../../../../utils/strings';
import { useGameStateContext } from '../../../../utils/context';
import { GameLevel, GameScreen } from '../../../../utils/types';
import { LevelButtonStyled, LevelButtonTitleStyled, LevelButtonImageStyled } from './styled';

type LevelButtonProps = {
  gameLevel: GameLevel;
};

const LevelButton = (props: LevelButtonProps) => {
  const { gameLevel } = props;
  const [visit, setVisit] = useState(false);
  const { gameState } = useGameStateContext();
  const handleClick = () => {
    setVisit(true);
    setTimeout(() => {
      setGameStateLocalStorage(GAME_STATE_LOCAL_STORAGE_NAME, {
        ...gameState,
        gameLevel,
        gameScreen: GameScreen.game,
      }, true);
    }, 1000);
  };

  const getTitleAndImage = () => {
    switch (gameLevel) {
      case GameLevel.Beginner: return { title: STRINGS.START_SCREEN.BEGINNER, image: begginerImage };
      case GameLevel.Intermediate: return { title: STRINGS.START_SCREEN.INTERMEDIATE, image: intermediateImage };
      case GameLevel.Advanced: return { title: STRINGS.START_SCREEN.ADVANCED, image: advancedImage };
      default: return { title: STRINGS.START_SCREEN.BEGINNER, image: begginerImage };
    }
  };

  const { title, image } = getTitleAndImage();

  return (
    <LevelButtonStyled
      role="button"
      visit={visit}
      onClick={handleClick}
    >
      <LevelButtonImageStyled src={image} alt="" />
      <LevelButtonTitleStyled>{title}</LevelButtonTitleStyled>
    </LevelButtonStyled>
  );
};

export default LevelButton;
