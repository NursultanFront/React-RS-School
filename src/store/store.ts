import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './character/character';

export const store = configureStore({
  reducer: {
    char: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
