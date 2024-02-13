import { gql } from 'graphql-tag';

export const PictureFragment = gql`
  fragment Picture on Picture {
    url
  }
`;
