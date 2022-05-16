import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedGameState, mockedGameCards } from './utils/mocks';
import TarotQuizGame from './components/QuizGameOutletScreen';

const mockedSetGameState = jest.fn();
jest.mock('./utils/context', () => {
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

describe('TarotQuizGame', () => {
  it('should render correctly', () => {
    const { container } = render(<TarotQuizGame />);
    expect(container).toMatchSnapshot();
  });
});
