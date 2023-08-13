import {
  getWatchListsAction,
  toggleWatchlistAction,
} from "@/redux/actions/watchlist-action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddToWatchListIcon({ movie }) {
  const dispatch = useDispatch();
  const { watchlists } = useSelector((state) => state.watchlist);

  useEffect(() => {
    dispatch(getWatchListsAction());
  }, []);

  const addWatchListToLocalStorage = () => {
    dispatch(toggleWatchlistAction(movie));
  };

  //   check if this movie is already in the watchlist
  const isMovieInWatchlist = () => {
    return watchlists.some((item) => item.slug === movie.slug);
  };

  return (
    <i
      className={`bi bi-heart-fill text-2xl cursor-pointer hover:text-red-500 ml-3
        ${
          isMovieInWatchlist()
            ? "text-red-500"
            : "text-gray-500 hover:text-red-500"
        }
      `}
      onClick={() => addWatchListToLocalStorage()}
    ></i>
  );
}
