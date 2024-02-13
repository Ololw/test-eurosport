/**
 * @jest-environment jsdom
 */

import React from 'react';

import { render, screen } from '@testing-library/react';

import Loader from '../../src/app/components/loader/loader.component';

describe('Loader', () => {
  it('renders Loader component', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader'));
  });
});
