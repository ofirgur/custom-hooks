import * as React from 'react';
import { render } from '@testing-library/react';

import { STRINGS } from '../../../../utils/strings';
import GameScoreResult from './';

const props = {
  moves: 8,
  points: 800,
};

describe('GameScoreResult', () => {
  it('should render correctly', () => {
    const { container } = render(<GameScoreResult {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct score', () => {
    const { getByText } = render(<GameScoreResult {...props} />);
    const movesText = getByText(STRINGS.END_SCREEN.MOVES);
    const moves = movesText.nextElementSibling?.innerHTML;
    expect(moves).toBe(props.moves.toString());
    const pointsText = getByText(STRINGS.END_SCREEN.POINTS);
    const points = pointsText.nextElementSibling?.innerHTML;
    expect(points).toBe(props.points.toString());
  });
});
