import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Api } from '../api/api';
import { IPlayer } from '../utils/types';

export interface IAddPlayersPayload {
  payload: IPlayer[];
  type: string;
}

type PlayersSliceState = {
  players: IPlayer[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: PlayersSliceState = { players: [], isLoading: false, hasError: false };

export const fetchPlayers = createAsyncThunk('players/fetch', async () => {
  const api = new Api();
  const result = await api.getPlayers();
  return result.players;
});

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPlayers.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchPlayers.rejected, (state) => {
      state.hasError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      state.players = action.payload;
      state.isLoading = false;
    });
  },
});

export default playersSlice.reducer;
