import * as React from 'react';
import { render } from '@testing-library/react';

import TarotMemoryGame from './';

describe('TarotMemoryGame', () => {
  it('should render correctly', () => {
    const { container } = render(<TarotMemoryGame />);
    expect(container).toMatchSnapshot();
  });
});
