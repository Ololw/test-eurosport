import { gql } from 'graphql-tag';

export const StatsFragment = gql`
  fragment StatsFragment on Stats {
    rank
    points
    weight
    height
    age
  }
`;
