import React from 'react';
import { QuizTimelineStyled, QuizTimelinePointStyled } from './styled';

type QuizTimelineProps = {
  numbersArray: number[];
  currentIndex: number;
};

const QuizTimeline = (props: QuizTimelineProps) => {
  const { numbersArray, currentIndex } = props;

  return (
    <QuizTimelineStyled data-testid="quiz-timeline">
      {
        numbersArray.map((n: number, index: number) => {
          return (
            <QuizTimelinePointStyled
              key={index}
              passed={currentIndex >= index}
              current={currentIndex === index}
            />
          );
        })
      }
    </QuizTimelineStyled>
  );
};

export default QuizTimeline;
