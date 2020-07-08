/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('Displays spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const elem = getByTestId('spinner');
    expect(elem).toBeInTheDocument();
  });
  test('Spinner conatins 3 elemenst', () => {
    const { getByTestId } = render(<Spinner />);
    const elem = getByTestId('spinner');
    expect(elem.children.length).toBe(3);
  });
});
