import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";

export const store = configureStore({
  reducer,
});

/* Types */
export type RootStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
