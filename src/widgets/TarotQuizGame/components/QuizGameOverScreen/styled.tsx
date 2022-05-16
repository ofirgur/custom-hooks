import styled from '@emotion/styled';
import { VARIABLES } from '../../utils/variables';

export const QuizGameOverScreenStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: #fff;
`;

const SharedButton = styled.button`
  text-align: center;
  width: 300px;
  height: 46px;
  font-size: 25px;
  font-weight: 500;
  border: 0;
  border-radius: 40px; 
  cursor: pointer;
`;

export const StartOverButton = styled(SharedButton)`
  color: ${VARIABLES.COLOR.BLACK.SOLID};
  background: ${VARIABLES.BACKGROUND.ORANGE.SOLID}; 
`;

export const YesNoTarot = styled(SharedButton)`
  color: ${VARIABLES.COLOR.ORANGE.SOLID};
  background: ${VARIABLES.BACKGROUND.BLACK.BUTTON};
  box-shadow: ${VARIABLES.BOX_SHADOW.BUTTON}
`;
