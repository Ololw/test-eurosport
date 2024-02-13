import { gql } from 'graphql-tag';
import { print } from 'graphql/language/printer';

import { IPlayer } from '../../utils/types';
import { PlayerFragment } from '../fragments';

export interface IGetPlayersData {
  players: IPlayer[];
}

export const GetPlayersQuery = print(gql`
  query GetPlayers {
    players {
      ...PlayerFragment
    }
  }

  ${PlayerFragment}
`);
