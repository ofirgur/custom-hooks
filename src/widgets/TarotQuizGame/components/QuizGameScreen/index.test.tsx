import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedGameState, mockedGameCards } from '../../utils/mocks';
import QuizGameScreen from './';

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

describe('QuizGameScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<QuizGameScreen />);
    expect(container).toMatchSnapshot();
  });
});
