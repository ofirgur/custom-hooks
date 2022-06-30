import * as React from 'react';
import { render } from '@testing-library/react';

import { mockedGameState } from '../../utils/mocks';
import GameOutletScreen from '.';

// The jest object is automatically in scope within every test file. 
// The methods in the jest object help create mocks and let you control Jest's overall behavior. 
// It can also be imported explicitly by via import {jest} from '@jest/globals'.

// Mock functions are also known as "spies", 
// because they let you spy on the behavior of a function that is called indirectly by some other code, 
// rather than only testing the output. 
// You can create a mock function with jest.fn(). If no implementation is given, 
// the mock function will return undefined when invoked.

const mockedSetGameState = jest.fn();
jest.mock('../../utils/context', () => {
  return {
    useGameStateContext: () => ({
      setGameState: mockedSetGameState,
      gameState: {
        ...mockedGameState,
      },
    }),
  }
});

describe('GameOutletScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<GameOutletScreen />);
    expect(container).toMatchSnapshot();
  });
});
