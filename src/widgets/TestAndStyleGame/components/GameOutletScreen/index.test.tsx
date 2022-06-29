import * as React from 'react';
import { render } from '@testing-library/react';

import { mockedGameState } from '../../utils/mocks';
import GameOutletScreen from './index';

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

describe('GameOutletScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<GameOutletScreen />);
    expect(container).toMatchSnapshot();
  });
});
