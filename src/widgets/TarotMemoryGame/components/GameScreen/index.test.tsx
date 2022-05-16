import * as React from 'react';
import { render } from '@testing-library/react';

import { STRINGS } from '../../utils/strings';
import { mockedGameState } from '../../utils/mocks';
import GameScreen from './';

const mockedSetGameState = jest.fn(() => { });
jest.mock('../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      gameState: mockedGameState,
      setGameState: mockedSetGameState,
    }),
  }
});

describe('GameScreen', () => {
  it('should render scores & cards', () => {
    const { getByText } = render(<GameScreen />);
    expect(getByText(STRINGS.GAME_SCREEN.MOVES)).toBeVisible();
  });
});

