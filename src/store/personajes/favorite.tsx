import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Ancestry,
  Core,
  Gender,
  HairColour,
  House,
  Species,
} from "@/interface/harryResponse";
import { Character } from "@/interface";

interface FavoriteState {
  [key: string]: boolean;
}

const initialState: FavoriteState = {};

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const favoriteCount = Object.keys(state).length;

      if (!!state[name]) {
        delete state[name];
        return;
      }

      //      state[name] = !state[name];

      if (favoriteCount < 5) {
        state[name] = true;
      }
    },
  },
});

export const { toggleFavorite } = favorite.actions;

export default favorite.reducer;
