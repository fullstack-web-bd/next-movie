import { AnyAction, Dispatch } from "redux";
import * as Types from "@/redux/types/watchlist-type";

export const toggleWatchlistAction = (movie: any) => (dispatch: Dispatch) => {
  const watchList = JSON.parse(localStorage.getItem("watchList") ?? "[]");
  let watchlistData = [];

  if (watchList.find((m: any) => m.slug === movie.slug)) {
    watchlistData = watchList.filter((m: any) => m.slug !== movie.slug);
    localStorage.setItem("watchList", JSON.stringify(watchlistData));
  } else {
    watchList.push(movie);
    localStorage.setItem("watchList", JSON.stringify(watchList));
    watchlistData = watchList;
  }

  dispatch({
    type: Types.SET_WATCH_LIST,
    payload: watchlistData,
  });
};

export const getWatchListsAction = () => (dispatch: Dispatch) => {
  const watchlist = localStorage.getItem("watchList");
  if (watchlist) {
    dispatch({
      type: Types.SET_WATCH_LIST,
      payload: JSON.parse(watchlist),
    });
  }
};
