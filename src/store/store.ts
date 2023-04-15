import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './character/character';
import modalReducer from './modal/modal';

export const store = configureStore({
  reducer: {
    char: characterReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
