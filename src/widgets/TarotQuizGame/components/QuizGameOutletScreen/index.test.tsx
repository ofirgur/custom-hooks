import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedGameState, mockedGameCards } from '../../utils/mocks';
import GameOutletScreen from './';

const mockedSetGameState = jest.fn();
jest.mock('../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      setGameState: mockedSetGameState,
      gameState: {
        ...mockedGameState,
        gameCards: mockedGameCards,
      },
    }),
  }
});

describe('GameOutletScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<GameOutletScreen />);
    expect(container).toMatchSnapshot();
  });
});
