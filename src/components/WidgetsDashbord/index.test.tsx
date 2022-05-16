import * as React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { render } from '@testing-library/react';

import { WIDGETS } from '../WidgetsSelection/widgets';
import WidgetsDashbord from './';

const component = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<WidgetsDashbord widgets={WIDGETS} />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

describe('WidgetsDashboard', () => {
  it('should render correctly', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });
});
