import React from 'react';
import { GAME_POINTS } from '../../../../utils/constants';
import { STRINGS } from '../../../../utils/strings';
import amazingSvg from '../../../../assets/images/amazing.svg';
import wellDoneSvg from '../../../../assets/images/well_done.svg';
import notBadSvg from '../../../../assets/images/not_bad.svg';
import tryAgainSvg from '../../../../assets/images/try_again.svg';
import { GameScoreResultStyled, ScoreWrapper, PointsScore, ScoteText } from './styled';

interface GameScoreResultProps {
  points: number;
}

const GameScoreResult = (props: GameScoreResultProps) => {
  const { points } = props;
  const getScoreSVG = () => {
    switch (points) {
      case (GAME_POINTS.AMAIZING):
        return amazingSvg;
      case (GAME_POINTS.WELL_DONE):
      case (GAME_POINTS.WELL_DONE_2):
        return wellDoneSvg;
      case (GAME_POINTS.NOT_BAD):
      case (GAME_POINTS.NOT_BAD_2):
        return notBadSvg;
      case (GAME_POINTS.TRY_AGAIN):
      case (GAME_POINTS.TRY_AGAIN_2):
        return tryAgainSvg;
      default: return tryAgainSvg;
    }
  };

  return (
    <GameScoreResultStyled>
      <img src={getScoreSVG()} alt="" />
      <ScoreWrapper>
        <PointsScore>
          <span className="text">{STRINGS.END_SCREEN.POINTS}</span>
          <span className="value">{points}</span>
        </PointsScore>
        <ScoteText>{STRINGS.END_SCREEN.STRING_PER_SCORE(points)}</ScoteText>
      </ScoreWrapper>
    </GameScoreResultStyled>
  );
};

export default GameScoreResult;
