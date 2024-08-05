import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteCharacter } from "@/interface/harryResponse";
import { Character } from "@/interface";
import { loadFromLocalStorage } from "../localStorageUtils";

interface FavoriteState {
  [key: string]: FavoriteCharacter;
}

const initialState: FavoriteState = loadFromLocalStorage();

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (
      state,
      action: PayloadAction<{ name: string; image: string }>
    ) => {
      const { name, image } = action.payload;
      const favoriteCount = Object.keys(state).length;

      if (!!state[name]) {
        delete state[name];
        return;
      }

      //      state[name] = !state[name];

      if (favoriteCount < 5) {
        state[name] = { name, image };
      }
    },
  },
});

export const { toggleFavorite } = favorite.actions;

export default favorite.reducer;
