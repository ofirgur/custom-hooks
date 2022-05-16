import * as React from 'react';
import { render } from '@testing-library/react';
import { STRINGS } from '../../../../utils/strings';
import { mockedPoints } from '../../../../utils/mocks';
import GameScoreResult from './index';

const props = {
  points: mockedPoints,
};

describe('GameScoreResult', () => {
  it('should render correctly', () => {
    const { container } = render(<GameScoreResult {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render score', () => {
    const { getByText } = render(<GameScoreResult {...props} />);
    expect(getByText(mockedPoints)).toBeVisible();
  });

  it('should render score test', () => {
    const { getByText } = render(<GameScoreResult {...props} />);
    expect(getByText(STRINGS.END_SCREEN.STRING_PER_SCORE(props.points))).toBeVisible();
  });
});
