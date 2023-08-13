import dynamic from "next/dynamic";
const Watchlist = dynamic(() => import("../components/watchlist"), {
  ssr: false,
});

export default function WatchlistPage() {
  return <Watchlist />;
}
