import { gql } from 'graphql-tag';
import { print } from 'graphql/language/printer';

import { IMatch } from '../../utils/types';
import { MatchFragment } from '../fragments';

export interface IGetMatchesData {
  matches: IMatch[];
}

export const GetMatchesQuery = print(gql`
  query GetMatches {
    matches {
      ...MatchFragment
    }
  }

  ${MatchFragment}
`);
