import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedGameState, mockedGameCards } from '../../../../utils/mocks';
import { GameCard } from '../../../../utils/types';
import CardsList from './';

jest.mock('../../../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      gameState: {
        ...mockedGameState,
        gameCards: mockedGameCards,
      },
    }),
  }
});

const props = {
  cards: mockedGameCards as GameCard[]
};

describe('CardsList', () => {
  it('should render correctly', () => {
    const { container } = render(<CardsList {...props} />);
    expect(container).toMatchSnapshot();
  });
});
