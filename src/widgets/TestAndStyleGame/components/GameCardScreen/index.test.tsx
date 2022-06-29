import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GameScreen } from '../../utils/types';
import { mockedGameState } from '../../utils/mocks';
import GameCardScreen from './index';

const mockedSetGameState = jest.fn();
jest.mock('../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      setGameState: mockedSetGameState,
      gameState: {
        ...mockedGameState,
      },
    }),
  }
});

describe('GameCardScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCardScreen />);
    expect(container).toMatchSnapshot();
  });

  it('should render title of the selected post', () => {
    const { getByText } = render(<GameCardScreen />);
    expect(getByText(mockedGameState.gameSelectedPost.title)).toBeVisible();
  });

  it('in case user clicks on the post card it should call to setGameState', async () => {
    const { getByRole } = render(<GameCardScreen />);
    const user = userEvent.setup();
    await user.click(getByRole('button'));
    expect(mockedSetGameState).toHaveBeenCalledWith({
      gameScreen: GameScreen.Start,
      gameSelectedPost: undefined,
    });
  });
});
