import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedNumbersArray, mockedCardIndex } from '../../../../../../utils/mocks';

import QuizTimeline from './';

const props = {
  numbersArray: mockedNumbersArray,
  currentIndex: mockedCardIndex,
};

describe('QuizTimeline', () => {
  it('should render correctly', () => {
    const { container } = render(<QuizTimeline {...props} />);
    expect(container).toMatchSnapshot();
  });
});
