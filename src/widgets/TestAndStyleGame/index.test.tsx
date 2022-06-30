import * as React from 'react';
import { render } from '@testing-library/react';
import TestAndStyleGame from '.';

// The @testing-library family of packages helps you test UI components in a user-centric way.
// The more your tests resemble the way your software is used, the more confidence they can give you.

// The problem
// You want to write maintainable tests that give you high confidence that your components are working for your users. 
// As a part of this goal, you want your tests to avoid including implementation details so refactors of your 
// components (changes to implementation but not functionality) don't break your tests and slow you and your team down.

// The solution
// The core library, DOM Testing Library, is a light-weight solution for testing web pages by querying and interacting with DOM nodes (whether simulated with JSDOM/Jest or in the browser). 
// The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. 
// In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.
// The core library has been wrapped to provide ergonomic APIs for several frameworks, including React, Angular, 
// and Vue. There is also a plugin to use testing-library queries for end-to-end tests in Cypress and an implementation for React Native.

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
