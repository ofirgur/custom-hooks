import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockedPacketCard } from '../../../../utils/mocks';
import FlipPacketCard from '.';

const mockedOnClick = jest.fn();
const props = {
  packetCard: mockedPacketCard,
  onClick: mockedOnClick,
  isMatched: true,
};

describe('FlipPacketCard', () => {
  it('should render correctly', () => {
    const { container } = render(<FlipPacketCard {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should call to onClick in case user clicked on the card', async () => {
    const { container } = render(<FlipPacketCard {...props} />);
    const user = userEvent.setup();
    const f = container.querySelector('.flip-card-inner');
    await user.click(f as HTMLElement);
    expect(mockedOnClick).toHaveBeenCalled();
  });
});

