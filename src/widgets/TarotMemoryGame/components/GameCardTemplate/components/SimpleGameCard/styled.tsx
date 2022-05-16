import styled from '@emotion/styled';

import { VARIABLES } from '../../../../utils/variables';

export const SimpleGameCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SimpleCardImage = styled.img`
  width: 110px;
  height: 190px;
  border-radius: 10px;
`;

export const CardTitle = styled.span`
  margin-top: 12px;
  color: ${VARIABLES.COLOR.WHITE};
  font-size: 18px
  font-weight: 400;
  line-height: 24px;
  height: 50px;
  width: 124px;
  text-align: center;
`;

export const MeaningLink = styled.a`
  margin-top: 2px; 
  color: ${VARIABLES.COLOR.ORANGE.SOLID};
  font-size: 18px
  font-weight: 400;
  line-height: 24px;
`;
