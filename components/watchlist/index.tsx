import { useEffect } from "react";
import Movies from "../movies";
import { useDispatch, useSelector } from "react-redux";
import { getWatchListsAction } from "@/redux/actions/watchlist-action";

export default function () {
  const dispatch = useDispatch();
  const { watchlists } = useSelector((state) => state.watchlist);

  useEffect(() => {
    dispatch(getWatchListsAction());
  }, []);

  return (
    <main>
      <Movies movies={watchlists} title={"Watchlist"} enableSorting={false} />
    </main>
  );
}
