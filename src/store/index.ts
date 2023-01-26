import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { OutlaySlice } from "./OutlaySlice";

const rootReducer = combineReducers({
  outlays: OutlaySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// types
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch 