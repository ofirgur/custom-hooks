import styled from '@emotion/styled';
import { VARIABLES } from '../../utils/variables';

export const GameScreenStyled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 6px;
  max-width: 720px;
  margin: 0 auto;
`;

export const Fetching = styled.div`
  color: ${VARIABLES.COLOR.ORANGE.SOLID};
  font-size: 24px;
  height: 100vh;
  width: 100%;
  text-align: center;
`;
