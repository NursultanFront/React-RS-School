import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/index';
import { Character } from 'api/character/types';

interface InitialState {
  data: Character[];
  loading: boolean;
  error: boolean;
}

export const getChar = createAsyncThunk<Character[]>('@@charcters/getChar', async () => {
  const { results } = await api.character.list();
  return results as Character[];
});

export const searchChar = createAsyncThunk<Character[], string>(
  '@@charcters/searchChar',
  async (value) => {
    const { results } = await api.character.searchName(value);
    return results;
  }
);

const initialState: InitialState = {
  data: [],
  loading: false,
  error: false,
};

const characterSlice = createSlice({
  name: 'charcters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChar.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getChar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getChar.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      })
      .addCase(searchChar.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchChar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(searchChar.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      });
  },
});

export default characterSlice.reducer;
