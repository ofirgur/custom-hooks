import styled from '@emotion/styled';
import { VARIABLES } from '../../../../../../utils/variables';

export const QuizTimelineStyled = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

type QuizTimelinePointStyledProps = {
  passed: boolean;
  current: boolean;
};

const getOpacity = (passed: boolean, current: boolean) => {
  if (!passed) return '1';
  if (current) return '1';
  return '0.5';
};

export const QuizTimelinePointStyled = styled.div<QuizTimelinePointStyledProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p => (p.passed
    ? VARIABLES.BACKGROUND.ORANGE.SOLID
    : VARIABLES.BACKGROUND.WHITE)
  };
  opacity: ${p => getOpacity(p.passed, p.current)};
`;
