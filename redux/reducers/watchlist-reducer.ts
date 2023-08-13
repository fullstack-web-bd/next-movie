import * as Types from "@/redux/types/watchlist-type";

const initialState = {
  watchlists: [],
};

export default function WatchlistReducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.SET_WATCH_LIST:
      return {
        ...state,
        watchlists: action.payload,
      };

    default:
      break;
  }
  return state;
}
