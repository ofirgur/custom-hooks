import * as React from 'react';
import { render } from '@testing-library/react';
import { STRINGS } from '../../../../utils/strings';
import GameScreenTitle from './';

const props = {
  matches: 2,
  moves: 6,
};

describe('GameScreenTitle', () => {
  it('should render correctly', () => {
    const { container } = render(<GameScreenTitle {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render correct values', () => {
    const { getByText } = render(<GameScreenTitle {...props} />);
    expect(getByText(STRINGS.GAME_SCREEN.MATCHES)?.nextElementSibling?.innerHTML).toBe(props.matches.toString());
    expect(getByText(STRINGS.GAME_SCREEN.MOVES)?.nextElementSibling?.innerHTML).toBe(props.moves.toString());
  });
});
