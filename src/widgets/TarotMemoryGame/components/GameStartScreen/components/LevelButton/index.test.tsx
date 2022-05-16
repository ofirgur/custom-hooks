import * as React from 'react';
import { render } from '@testing-library/react';

import { GameState, GameLevel } from '../../../../utils/types';
import LevelButton from './';

const mockSetGameState = jest.fn((gameState: GameState) => gameState);
jest.mock('../../../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      setGameState: mockSetGameState,
    }),
  }
});

const props = {
  gameLevel: GameLevel.Beginner,
};

describe('LevelButton', () => {
  it('should render correctly', () => {
    const { container } = render(<LevelButton {...props} />);
    expect(container).toMatchSnapshot();
  });
});
