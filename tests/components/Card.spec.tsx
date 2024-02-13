/**
 * @jest-environment jsdom
 */

import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from '../../src/app/components/card/card.component';

const onClick = jest.fn(() => {});

describe('Card', () => {
  it('renders Loader component', () => {
    render(
      <Card>
        <></>
      </Card>
    );
    expect(screen.getByTestId('card').className).toBe('p-8 rounded-lg border border-slate-200 shadow-md transition-shadow');
  });

  it('Should have custom classes', () => {
    render(
      <Card className="flex">
        <></>
      </Card>
    );
    expect(screen.getByTestId('card').className).toBe('flex p-8 rounded-lg border border-slate-200 shadow-md transition-shadow');
  });

  it('Should display children', () => {
    render(
      <Card className="flex">
        <div data-testid="div-test"></div>
      </Card>
    );

    expect(screen.getByTestId('div-test'));
  });

  it('Should trigger onClick when clicking in the card', async () => {
    render(
      <Card className="flex" onClick={onClick}>
        <div data-testid="div-test"></div>
      </Card>
    );

    await userEvent.click(screen.getByTestId('div-test'));
    expect(onClick).toHaveBeenCalled();
  });
});
