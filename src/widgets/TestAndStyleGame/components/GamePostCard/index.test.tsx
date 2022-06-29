import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GameScreen } from '../../utils/types';
import { mockedGameState } from '../../utils/mocks';
import GamePostCard from './index';

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

const props = {
    post: mockedGameState.gameSelectedPost,
}

describe('GamePostCard', () => {
  it('should render correctly', () => {
    const { container } = render(<GamePostCard {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('in case user clicks on the post card it should call to setGameState', async () => {
    const { getByRole } = render(<GamePostCard {...props} />);
    const user = userEvent.setup();
    await user.click(getByRole('button'));
    expect(mockedSetGameState).toHaveBeenCalledWith({
        gameScreen: GameScreen.Card,
        gameSelectedPost: props.post,
    });
  });
});
