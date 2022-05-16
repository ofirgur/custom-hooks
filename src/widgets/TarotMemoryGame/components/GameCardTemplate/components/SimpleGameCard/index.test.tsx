import * as React from 'react';
import { render } from '@testing-library/react';

import { mockedGameCard } from '../../../../utils/mocks';
import SimpleGameCard from '.';

const mockedOnClick = jest.fn();
const props = {
  gameCard: mockedGameCard,
  onClick: mockedOnClick,
};

describe('SimpleGameCard', () => {
  it('should render correctly', () => {
    const { container } = render(<SimpleGameCard {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('should render card, title & link & cards', () => {
    const { container } = render(<SimpleGameCard {...props} />);
    const image = container.querySelector('img');
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', props.gameCard.image);

    const title = container.querySelector('span');
    expect(title).toBeVisible();
    expect(title?.innerHTML).toEqual(props.gameCard.name);

    const link = container.querySelector('a');
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', props.gameCard.link);
  });
});

