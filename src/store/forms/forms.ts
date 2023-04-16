import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'components/form/form.interface';

interface FormInitial {
  forms: Product[];
  productExist: boolean;
  count: number;
}

const initialState: FormInitial = {
  forms: [],
  productExist: false,
  count: 0,
};

const formSlice = createSlice({
  name: '@@/form',
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.forms = [...state.forms, action.payload];
      state.productExist = true;
      state.count = state.count + 1;
    },
  },
});

export const { setForm } = formSlice.actions;
export default formSlice.reducer;
