import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/index';
import { Character } from 'api/character/types';

interface InitialState {
  oneChar: Character | null;
  modalLoading: boolean;
  modalError: boolean;
}

export const setOneChar = createAsyncThunk<Character, number>('@@charcters/oneChar', async (id) => {
  const results = await api.character.getOneCharacter(id);
  return results;
});

const initialState: InitialState = {
  oneChar: null,
  modalLoading: false,
  modalError: false,
};

const modalSlice = createSlice({
  name: 'charcters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOneChar.pending, (state) => {
        state.modalLoading = true;
        state.modalError = false;
      })
      .addCase(setOneChar.rejected, (state) => {
        state.modalLoading = false;
        state.modalError = true;
      })
      .addCase(setOneChar.fulfilled, (state, action) => {
        console.log(action.payload);
        state.modalLoading = false;
        state.modalError = false;
        state.oneChar = action.payload;
      });
  },
});

export default modalSlice.reducer;
