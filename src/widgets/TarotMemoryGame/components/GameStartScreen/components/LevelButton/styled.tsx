import styled from '@emotion/styled';
import { VARIABLES } from '../../../../utils/variables';

type LevelButtonStyledProps = {
  visit: boolean;
};

export const LevelButtonStyled = styled.button<LevelButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 300px;
  height: 115px;
  background: ${p => (p.visit ? VARIABLES.BACKGROUND.ORANGE.SOLID : VARIABLES.BACKGROUND.BLACK.SELECT_LEVEL_BUTTON)};
  box-shadow: ${VARIABLES.BOX_SHADOW.BUTTON};
  border-radius: 14px;
  cursor: pointer;
  border: 0;
`;

export const LevelButtonTitleStyled = styled.span`
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  color: ${VARIABLES.COLOR.WHITE};
`;

export const LevelButtonImageStyled = styled.img`
  width: 70px;
`;
