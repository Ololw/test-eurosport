import { gql } from 'graphql-tag';

export const MatchFragment = gql`
  fragment MatchFragment on Match {
    id
    players {
      id
    }
    winner {
      id
    }
    startTime
    endTime
  }
`;
