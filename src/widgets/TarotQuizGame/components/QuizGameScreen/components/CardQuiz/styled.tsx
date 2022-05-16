import styled from '@emotion/styled';
import { VARIABLES } from '../../../../utils/variables';

export const CardQuizStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const SelectionAreaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  > button {
    flex: 0 0 45%;
  }
`;

type NextButtonProps = {
  disabled: boolean;
};

export const NextButtonStyled = styled.button<NextButtonProps>`
  padding: 0 20px;
  min-width: 141px;
  height: 41px;
  line-height: 41px;
  background: ${VARIABLES.BACKGROUND.ORANGE.SOLID};
  color: ${VARIABLES.COLOR.BLACK.SOLID};
  border: 0;
  border-radius: 40px;
  font-size: 22px;
  font-weight: 500;
  opacity: ${p => (p.disabled ? '0.5' : '1')};
  cursor: pointer;
`;
