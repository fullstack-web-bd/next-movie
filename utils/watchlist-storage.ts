export const getWatchlistMovies = () => {
  const watchlist = localStorage.getItem("watchList");
  if (watchlist) {
    return JSON.parse(watchlist) ?? [];
  }

  return [];
};
