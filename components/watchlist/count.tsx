import { IState } from "@/interfaces";
import { useSelector } from "react-redux";

export default function WatchListCount() {
  const { watchlists } = useSelector((state: IState) => state.watchlist);

  if (watchlists.length === 0) {
    return null;
  }

  return (
    <span className="bg-red-500 text-white rounded-full text-xs px-2 ml-2">
      {watchlists.length}
    </span>
  );
}
