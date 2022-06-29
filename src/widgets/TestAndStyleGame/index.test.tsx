import * as React from 'react';
import { render } from '@testing-library/react';
import TestAndStyleGame from './index';

describe('TestAndStyleGame', () => {
  it('should render correctly', () => {
    const { container } = render(<TestAndStyleGame />);
    expect(container).toMatchSnapshot();
  });
});
