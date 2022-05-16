import styled from '@emotion/styled';

import { VARIABLES } from '../../../../../../utils/variables';

type NameButtonStyledProps = {
  disabled: boolean;
};

export const NameButtonStyled = styled.button<NameButtonStyledProps>`
  padding: 5px;
  width: 200px;
  max-width: 300px;
  height: 54px;
  background: ${VARIABLES.BACKGROUND.BLACK.BUTTON};
  color: ${VARIABLES.COLOR.WHITE};
  box-shadow: ${VARIABLES.BOX_SHADOW.BUTTON};
  border: 0;
  border-radius: 6px;
  text-align: center;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  visibility: ${props => (props.disabled ? 'hidden' : 'visible')};
  cursor: pointer;
`;
