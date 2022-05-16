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
  padding-top: 20px;
`;

export const SharedScore = styled.div`
  color: ${VARIABLES.COLOR.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: ${VARIABLES.COLOR.ORANGE.SOLID};
  }
  .value {
    font-weight: 600;
  }
`;

export const MovesScore = styled(SharedScore)`
  width: 100px;
  .text {
    font-size: 20px;
    font-weight: 300;
  }
  .value {
    font-size: 30px;
  }
`;

export const PointsScore = styled(SharedScore)`
  gap: 10px;
  .text {
    font-size: 35px;
    font-weight: 400;
  }
  .value {
    font-size: 55px;
  }
`;
