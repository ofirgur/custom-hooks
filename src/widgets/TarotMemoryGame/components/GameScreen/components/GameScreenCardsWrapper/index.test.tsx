import * as React from 'react';
import { render } from '@testing-library/react';

import { mockedGameState, mockedGameScore } from '../../../../utils/mocks';
import GameScreenCardsWrapper from './';

const mockedSetGameState = jest.fn(() => { });
jest.mock('../../../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      gameState: mockedGameState,
      setGameState: mockedSetGameState,
    }),
  }
});

const props = {
  ...mockedGameScore,
};

describe('GameCardsList', () => {
  it('should render 8 cards from 4 game cards', () => {
    const { container } = render(<GameScreenCardsWrapper {...props} />);
    expect(container.querySelectorAll('.flip-card-inner').length).toBe(mockedGameState.gameCards.length * 2);
  });
});
