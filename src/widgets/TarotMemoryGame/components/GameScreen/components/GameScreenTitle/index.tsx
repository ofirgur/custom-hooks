import React from 'react';
import { STRINGS } from '../../../../utils/strings';
import { Count, ScoreTitle, ScoreWrapper, Styled } from './styled';

interface GameScreenTitleProps {
  matches: number;
  moves: number;
}

const GameScreenTitle = (props: GameScreenTitleProps) => {
  const { moves, matches } = props;

  return (
    <Styled>
      <ScoreWrapper>
        <ScoreTitle>{STRINGS.GAME_SCREEN.MATCHES}</ScoreTitle>
        <Count>{matches}</Count>
      </ScoreWrapper>
      <ScoreWrapper>
        <ScoreWrapper>
          <ScoreTitle>{STRINGS.GAME_SCREEN.MOVES}</ScoreTitle>
          <Count>{moves}</Count>
        </ScoreWrapper>
      </ScoreWrapper>
    </Styled>
  );
};

export default GameScreenTitle;
