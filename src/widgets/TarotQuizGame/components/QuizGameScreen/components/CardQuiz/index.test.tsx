import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { STRINGS } from '../../../../utils/strings';
import { mockedGameCard } from '../../../../utils/mocks';
import { GameCard } from '../../../../utils/types';
import CardQuiz from './';

const mockHandleCardIndex = jest.fn((name: string) => name);
const props = {
  card: mockedGameCard as GameCard,
  handleCardIndex: mockHandleCardIndex,
  isLastMatch: false,
  firstClickOnName: false,
  setFirstClickOnName: () => { },
};

describe('CardQuiz', () => {
  it('should render correctly', () => {
    const { container } = render(<CardQuiz {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render quizCards', async () => {
    const { getByText } = render(<CardQuiz {...props} />);
    expect(getByText(mockedGameCard.quizCards[0].name)).toBeVisible();
    expect(getByText(mockedGameCard.quizCards[1].name)).toBeVisible();
    expect(getByText(mockedGameCard.quizCards[2].name)).toBeVisible();
    expect(getByText(mockedGameCard.quizCards[3].name)).toBeVisible();
  });

  it('should call to handleIndex', async () => {
    const { getByText } = render(<CardQuiz {...props} />);
    const user = userEvent.setup();
    await user.click(getByText(mockedGameCard.name));
    await user.click(getByText(STRINGS.GAME_SCREEN.NEXT));
    expect(mockHandleCardIndex).toHaveBeenCalledWith(mockedGameCard.name);
  });
});
