import React, { useEffect } from 'react';
import { sendWazimoEvent } from '../../../../../../events';
import { STRING_PER_POINTS, GAME_POINTS } from '../../../../utils/constants';
import { STRINGS } from '../../../../utils/strings';
import amazingSvg from '../../../../assets/images/amazing.svg';
import wellDoneSvg from '../../../../assets/images/well_done.svg';
import notBadSvg from '../../../../assets/images/not_bad.svg';
import tryAgainSvg from '../../../../assets/images/try_again.svg';
import { GameScoreResultStyled, ScoreWrapper, MovesScore, PointsScore } from './styled';

interface GameScoreResultProps {
  moves: number;
  points: number;
}

const GameScoreResult = (props: GameScoreResultProps) => {
  const { moves, points } = props;

  useEffect(() => {
    sendWazimoEvent(
      'User`s score',
      `tarot-memory-score_${STRING_PER_POINTS[points]}`,
    );
  }, [points]);

  const getScoreSVG = () => {
    switch (points) {
      case (GAME_POINTS.AMAZING):
        return amazingSvg;
      case (GAME_POINTS.WELL_DONE):
        return wellDoneSvg;
      case (GAME_POINTS.NOT_BAD):
      case (GAME_POINTS.ALMOST):
        return notBadSvg;
      case (GAME_POINTS.TRY_AGAIN):
        return tryAgainSvg;
      default: return 0;
    }
  };

  return (
    <GameScoreResultStyled>
      <img src={getScoreSVG()} alt="" />
      <ScoreWrapper>
        <MovesScore>
          <span className="text">{STRINGS.END_SCREEN.MOVES}</span>
          <span className="value">{moves}</span>
        </MovesScore>
        <PointsScore>
          <span className="text">{STRINGS.END_SCREEN.POINTS}</span>
          <span className="value">{points}</span>
        </PointsScore>
      </ScoreWrapper>
    </GameScoreResultStyled>
  );
};

export default GameScoreResult;
