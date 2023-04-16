import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/index';
import { Character } from 'api/character/types';
import { RootState } from 'store/store';

interface InitialState {
  data: Character[];
  loading: boolean;
  error: boolean;
  search: string;
}

export const setSearchChar = createAsyncThunk<
  Character[],
  string | undefined,
  { state: RootState }
>('@@charcters/searchChar', async (value, state) => {
  const store = state.getState();
  const searchStr = value ?? store.char.search;

  const { results } = await api.character.searchName(searchStr);
  return results;
});

const initialState: InitialState = {
  data: [],
  loading: false,
  error: false,
  search: '',
};

const characterSlice = createSlice({
  name: 'charcters',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(setSearchChar.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(setSearchChar.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setSearchChar.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload;
      });
  },
});

export const { setSearch } = characterSlice.actions;
export default characterSlice.reducer;
