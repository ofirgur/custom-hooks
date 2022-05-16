import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedGameState } from '../../utils/mocks';
import GameOverScreen from './';

const mockedSetGameState = jest.fn(() => { });
jest.mock('../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      gameState: mockedGameState,
      setGameState: mockedSetGameState,
    }),
  }
});

jest.mock('../../../../localstorage', () => {
  return {
    setGameStateLocalStorage: jest.fn(),
  }
});

describe('GameOverScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<GameOverScreen />);
    expect(container).toMatchSnapshot();
  });
});
