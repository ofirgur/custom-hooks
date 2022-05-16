import * as React from 'react';
import { render } from '@testing-library/react';

import WidgetsSelection from './';

describe('WidgetsSelection', () => {
  it('should render correctly', () => {
    const { container } = render(<WidgetsSelection widgetName="tarotMemoryGame" />);
    expect(container).toMatchSnapshot();
  });
});
