import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { shopReducer } from "../../features/shop/reducer/shop.reducer";

export const store = configureStore({
  reducer: {
    shopReducer: shopReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
