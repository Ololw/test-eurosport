import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Api } from '../api/api';
import { IMatch } from '../utils/types';

type MatchesSliceState = {
  matchesList: Record<string, IMatch>;
  matchesByPlayer: Record<string, IMatch[]>;
  matchesWonByPlayer: Record<string, IMatch[]>;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: MatchesSliceState = { matchesList: {}, matchesByPlayer: {}, matchesWonByPlayer: {}, isLoading: false, hasError: false };

export const fetchMatches = createAsyncThunk('matches/fetch', async () => {
  const api = new Api();
  const result = await api.getMatches();
  return result.matches;
});

export const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMatches.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchMatches.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchMatches.fulfilled, (state, action) => {
      state.matchesList = {};
      state.matchesByPlayer = {};
      state.matchesWonByPlayer = {};

      action.payload.forEach((match) => {
        // fill matchesList
        state.matchesList[match.id] = match;

        // fill matchesByPlayer list
        match.players.forEach((player) => {
          if (!state.matchesByPlayer[player.id]) {
            state.matchesByPlayer[player.id] = [];
          }
          state.matchesByPlayer[player.id].push(match);
        });

        // fill matchesWonByPlayer list
        if (!state.matchesWonByPlayer[match.winner.id]) {
          state.matchesWonByPlayer[match.winner.id] = [];
        }
        state.matchesWonByPlayer[match.winner.id].push(match);
      });

      state.isLoading = false;
    });
  },
});

export default matchesSlice.reducer;
