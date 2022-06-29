import * as React from 'react';
import { render } from '@testing-library/react';

import { mockedGameState } from '../../utils/mocks';
import GamePostCard from './index';

const mockedSetGameState = jest.fn();
jest.mock('../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      setGameState: mockedSetGameState,
      gameState: {
        ...mockedGameState,
      },
    }),
  }
});

const props = {
    post: mockedGameState.gameSelectedPost,
}

describe('GamePostCard', () => {
  it('should render correctly', () => {
    const { container } = render(<GamePostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
