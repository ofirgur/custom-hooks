import styled from '@emotion/styled';
import { VARIABLES } from '../../utils/variables';

export const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const StartOverButton = styled.button`
  width: 307px;
  height: 46px;
  font-size: 25px;
  font-weight: 500;
  color: ${VARIABLES.COLOR.BLACK.SOLID};
  background: ${VARIABLES.BACKGROUND.ORANGE.SOLID};
  border-radius: 40px; 
  border: 0;
`;

export const ReadMore = styled.div`
  color: ${VARIABLES.COLOR.WHITE};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  width: 280px;
  @media only screen and (min-width: ${VARIABLES.BREAK_POINTS.MD_MIN}) {
    width: 100%;
  }
`;
