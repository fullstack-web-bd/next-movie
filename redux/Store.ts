import { configureStore } from "@reduxjs/toolkit";
import WatchlistReducer from "./reducers/watchlist-reducer";

const store = configureStore({
  reducer: {
    watchlist: WatchlistReducer,
  },
});

export default store;
