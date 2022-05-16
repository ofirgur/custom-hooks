import styled from '@emotion/styled';

import { VARIABLES } from '../../../../utils/variables';

export const Styled = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-bottom: 24px;
`;

export const ScoreWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ScoreTitle = styled.span`
  color: ${VARIABLES.COLOR.ORANGE.SOLID};
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  text-transform: capitalize;
`;

export const Count = styled.span`
  color: ${VARIABLES.COLOR.WHITE};
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  text-transform: capitalize;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
