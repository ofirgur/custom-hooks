import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockedGameCard } from '../../../../../../utils/mocks';
import NameButton from './';

const mockedOnClick = jest.fn();
const props = {
  name: mockedGameCard.name,
  onClick: mockedOnClick,
  disabled: false,
};

describe('NameButton', () => {
  it('should render correctly', () => {
    const { container } = render(<NameButton {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should call onClick on user click', async () => {
    const { getByText } = render(<NameButton {...props} />);
    const user = userEvent.setup();
    await user.click(getByText(mockedGameCard.name));
    expect(mockedOnClick).toHaveBeenCalled();
  });
});
