import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { mockedGameState } from '../../utils/mocks';
import GameStartScreen from './index';

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

describe('GameStartScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<GameStartScreen />);
    expect(container).toMatchSnapshot();
  });

  it('should render n posts according to gamePosts.length ', () => {
    const { getAllByRole } = render(<GameStartScreen />);
    expect(getAllByRole('button')).toHaveLength(mockedGameState.gamePosts.length);
  });
});
