export interface IMovie {
  title: string;
  subheading?: string;
  slug: string;
  coming_soon: boolean;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metascore: string;
  imdb_rating: string;
  imdb_votes: string;
  imdb_id: string;
  type: string;
  images: string[];
  trailer: string;
}

interface WatchListReducerState {
  watchlists: Array<IMovie>;
}

export interface IState {
  watchlist: WatchListReducerState;
}
