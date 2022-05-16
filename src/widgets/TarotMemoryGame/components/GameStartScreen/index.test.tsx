import * as React from 'react';
import { render } from '@testing-library/react';

import { STRINGS } from '../../utils/strings';
import { GameScreen } from '../../utils/types';
import GameStartScreen from './';

const mockedGameScreen = GameScreen.start;
jest.mock('../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      gameState: {
        gameScreen: mockedGameScreen,
      },
    }),
  }
});

describe('GameStartScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<GameStartScreen />);
    expect(container).toMatchSnapshot();
  });

  it('should render a title & 3 level buttons', () => {
    const { getByText } = render(<GameStartScreen />);
    expect(getByText(STRINGS.START_SCREEN.SELECT_A_LEVEL)).toBeVisible();
    expect(getByText(STRINGS.START_SCREEN.BEGINNER)).toBeVisible();
    expect(getByText(STRINGS.START_SCREEN.INTERMEDIATE)).toBeVisible();
    expect(getByText(STRINGS.START_SCREEN.ADVANCED)).toBeVisible();
  });
});
