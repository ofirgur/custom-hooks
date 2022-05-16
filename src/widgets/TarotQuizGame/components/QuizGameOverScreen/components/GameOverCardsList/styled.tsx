import styled from '@emotion/styled';
import { VARIABLES } from '../../../../utils/variables';

export const GameOverCardListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  width: 270px;
  @media only screen and (min-width: ${VARIABLES.BREAK_POINTS.MD_MIN}) {
    width: auto;
  }
`;
