import styled from '@emotion/styled';
import { VARIABLES } from '../../utils/variables';

export const GameOutletScreenStyled = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${VARIABLES.FONT_FAMILY.POPPINS};
  font-style: ${VARIABLES.FONT_STYLE.NORMAL};
  font-weight: ${VARIABLES.FONT_WEIGHT.NORMAL};
  padding: 10px;

  * {
    outline: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }
`;
