import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedGameState, mockedGameCards } from '../../utils/mocks';
import QuizGameOverScreen from './index';

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

jest.mock('../../../../localstorage', () => {
  return {
    setGameStateLocalStorage: jest.fn(),
  }
});

describe('QuizGameOverScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<QuizGameOverScreen />);
    expect(container).toMatchSnapshot();
  });
});
