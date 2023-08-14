import { useEffect } from "react";
import Movies from "../movies";
import { useDispatch, useSelector } from "react-redux";
import { getWatchListsAction } from "@/redux/actions/watchlist-action";
import { IState } from "@/interfaces";

export default function WatchLists() {
  const dispatch = useDispatch();
  const { watchlists } = useSelector((state: IState) => state.watchlist);

  useEffect(() => {
    dispatch(getWatchListsAction());
  }, []);

  return (
    <main>
      <Movies movies={watchlists} title={"Watchlist"} enableSorting={false} />
    </main>
  );
}
