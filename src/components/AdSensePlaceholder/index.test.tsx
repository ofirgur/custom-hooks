import * as React from 'react';
import { render } from '@testing-library/react';
import AdSensePlaceholder from './';

describe('WidgetsDashboard', () => {
  it('should render correctly', () => {
    const { container } = render(<AdSensePlaceholder />);
    expect(container).toMatchSnapshot();
  });
});
