import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedMatches } from '../../../../utils/mocks';
import { GameMatch } from '../../../../utils/types';
import GameOverCardsList from './index';

const props = {
  matches: mockedMatches as GameMatch[],
};

describe('GameOverCardsList', () => {
  it('should render correctly', () => {
    const { container } = render(<GameOverCardsList {...props} />);
    expect(container).toMatchSnapshot();
  });
});
