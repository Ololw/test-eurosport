import request from 'graphql-request';

import { GRAPHQL_URL } from '../../constants';
import { IMatch, IPlayer } from '../utils/types';
import { GetMatchesQuery, GetPlayersQuery } from './queries';

export class Api {
  baseUrl = GRAPHQL_URL;

  async getPlayers() {
    return request<{ players: IPlayer[] }>(this.baseUrl, GetPlayersQuery);
  }

  async getMatches() {
    return request<{ matches: IMatch[] }>(this.baseUrl, GetMatchesQuery);
  }
}
