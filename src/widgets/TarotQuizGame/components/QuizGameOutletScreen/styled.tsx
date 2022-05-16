import styled from '@emotion/styled';
import { VARIABLES } from '../../utils/variables';

export const QuizGameOutletScreenStyled = styled.div`
  font-family: ${VARIABLES.FONT_FAMILY.POPPINS};
  font-style: ${VARIABLES.FONT_STYLE.NORMAL};
  font-weight: ${VARIABLES.FONT_WEIGHT.NORMAL};
  padding: 10px;
  margin-bottom: 10px;

  * {
    outline: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }
`;
