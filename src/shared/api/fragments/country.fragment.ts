import { gql } from 'graphql-tag';

import { PictureFragment } from './picture.fragment';

export const CountryFragment = gql`
  fragment CountryFragment on Country {
    picture {
      ...Picture
    }
    code
  }

  ${PictureFragment}
`;
