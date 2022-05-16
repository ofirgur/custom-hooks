import * as React from 'react';
import { render } from '@testing-library/react';

import { GameScreen } from '../../utils/types';
import GameOutletScreen from './';

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

describe('GameOutletScreen0', () => {
  it('should render correctly', () => {
    const { container } = render(<GameOutletScreen />);
    expect(container).toMatchSnapshot();
  });

  it('should render GameStartScreen component in case gameState.gameScreen === GameScreen.start', () => {
    const { getByText } = render(<GameOutletScreen />)
    expect(getByText(/Select A Level/i)).toBeVisible();
  });
});
