import { FavoriteState } from "@/interface";

export function saveToLocalStorage(state: FavoriteState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favoriteState", serializedState);
  } catch (e) {
    console.warn("Error saving state to localStorage", e);
  }
}

export function loadFromLocalStorage(): FavoriteState {
  try {
    if (typeof window === "undefined") {
      return {};
    }

    const serializedState = localStorage.getItem("favoriteState");
    if (serializedState === null) return {};
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Error loading state from localStorage", e);
    return {};
  }
}
