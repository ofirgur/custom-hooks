import styled from '@emotion/styled';
import { VARIABLES } from '../../../../utils/variables';

export const GameCardsListStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  width: 275px;
  @media only screen and (min-width: ${VARIABLES.BREAK_POINTS.MD_MIN}) {
    width: 100%;
  }
`;
