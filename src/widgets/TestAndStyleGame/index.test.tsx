import * as React from 'react';
import { render } from '@testing-library/react';
import TestAndStyleGame from '.';

// Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
// A typical snapshot test case renders a UI component, takes a snapshot, 
// then compares it to a reference snapshot file stored alongside the test. 
// The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

describe('TestAndStyleGame', () => {
  it('should render correctly', () => {
    const { container } = render(<TestAndStyleGame />);
    expect(container).toMatchSnapshot();
  });
});
