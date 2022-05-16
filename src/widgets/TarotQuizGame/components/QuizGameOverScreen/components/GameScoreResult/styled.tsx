import styled from '@emotion/styled';
import { VARIABLES } from '../../../../utils/variables';

export const GameScoreResultStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 144px;
  background: ${VARIABLES.BACKGROUND.CREAME};
  position: absolute;
  bottom: 7px;
`;

export const PointsScore = styled.div`
  color: ${VARIABLES.COLOR.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  .text {
    color: ${VARIABLES.COLOR.ORANGE.SOLID};
    font-size: 35px;
    font-weight: 400;
  }
  .value {
    font-size: 55px;
    font-weight: 600;
  }
`;

export const ScoteText = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
`;
