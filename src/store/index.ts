import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { saveToLocalStorage } from "./localStorageUtils";

import favorite from "./personajes/favorite";

const localStorageMiddleware =
  (storeAPI: any) => (next: any) => (action: any) => {
    const result = next(action);
    saveToLocalStorage(storeAPI.getState().favorite);
    return result;
  };

export const store = configureStore({
  reducer: {
    favorite,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
