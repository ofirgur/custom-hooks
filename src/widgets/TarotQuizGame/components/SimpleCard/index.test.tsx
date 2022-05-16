import * as React from 'react';
import { render } from '@testing-library/react';
import { mockedGameCard } from '../../utils/mocks';
import { GameMatch } from '../../utils/types';
import SimpleCard from './index';

const props = {
  image: mockedGameCard.image,
  name: mockedGameCard.name,
  correct: true,
};

describe('SimpleCard', () => {
  it('should render correctly positive', () => {
    const { container } = render(<SimpleCard {...props} />);
    expect(container).toMatchSnapshot();
  });

  props.correct = false;
  it('should render correctly negative', () => {
    const { container } = render(<SimpleCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
