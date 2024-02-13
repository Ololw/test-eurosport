/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';

import PlayerCardComponent from '../../src/app/components/player-card/player-card.component';
import { store } from '../../src/shared/store';
import { IPlayer, PlayerSex } from '../../src/shared/utils/types';

const onClick = jest.fn(() => {});
const playerTest: IPlayer = {
  id: 'player-1',
  firstname: 'Benoit',
  lastname: 'Paire',
  country: {
    code: 'FR',
    picture: {
      url: 'url',
    },
  },
  picture: {
    url: 'url-profil',
  },
  sex: PlayerSex.MAN,
  shortname: 'BP',
  stats: {
    age: 18,
    height: 1000,
    points: 1,
    rank: 1,
    weight: 1000,
  },
};

jest.mock('../../src/constants.ts', () => ({
  GRAPHQL_URL: 'test-url',
}));

describe('Player card', () => {
  it('renders Player card component', () => {
    render(
      <Provider store={store}>
        <PlayerCardComponent player={playerTest} onClick={onClick} />
      </Provider>
    );

    expect(screen.getByTestId('player-card--total-played-time'));
    expect(screen.getByTestId('player-card--height'));
    expect(screen.getByTestId('player-card--weight'));
    expect(screen.getByTestId('player-card--rank'));
    expect(screen.getByTestId('player-card--points'));
  });
});
