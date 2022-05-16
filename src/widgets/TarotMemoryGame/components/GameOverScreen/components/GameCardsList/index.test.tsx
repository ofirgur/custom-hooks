import * as React from 'react';
import { render } from '@testing-library/react';

import { mockedGameState } from '../../../../utils/mocks';
import GameCardsList from './';

const props = {
  gameCards: mockedGameState.gameCards,
};

describe('GameCardsList', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCardsList {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render 4 cards', () => {
    const { container } = render(<GameCardsList {...props} />);
    expect(container.querySelectorAll('a').length).toBe(props.gameCards.length);
  });
});
