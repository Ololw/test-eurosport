import { gql } from 'graphql-tag';

import { CountryFragment } from './country.fragment';
import { PictureFragment } from './picture.fragment';
import { StatsFragment } from './stats.fragment';

export const PlayerFragment = gql`
  fragment PlayerFragment on Player {
    id
    firstname
    lastname
    shortname
    sex
    picture {
      ...Picture
    }
    country {
      ...CountryFragment
    }
    stats {
      ...StatsFragment
    }
  }

  ${PictureFragment}
  ${CountryFragment}
  ${StatsFragment}
`;
