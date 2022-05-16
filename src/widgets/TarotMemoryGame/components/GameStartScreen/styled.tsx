import styled from '@emotion/styled';
import { VARIABLES } from '../../utils/variables';

export const GameStartScreenStyled = styled.div`
  height: 100%;
  padding: 12px 0;
`;

export const SelectLevelTitle = styled.h4`
  color: ${VARIABLES.COLOR.ORANGE.SOLID};
  font-family: ${VARIABLES.FONT_FAMILY.POPPINS};
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 24px;

  @media only screen and (min-width: ${VARIABLES.BREAK_POINTS.MD_MIN}) {
    font-size: 35px;
    line-height: 52px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media only screen and (min-width: ${VARIABLES.BREAK_POINTS.MD_MIN}) {
    flex-direction: row;
  }
`;
