import Movies from "@/components/movies";
import MovieBanner from "@/components/movie-banner";

// import dynamic from "next/dynamic";
// const MovieBanner = dynamic(() => import("../components/movie-banner"), {
//   ssr: false,
// });

export default function Home({ movies, movieBanner }) {
  return (
    <main>
      <MovieBanner movie={movieBanner} />
      <Movies movies={movies} />
    </main>
  );
}

export async function getServerSideProps({ query, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=59"
  );

  // const startIndex = query.start ?? 0;
  // const limit = query.limit ?? 10;

  const sort = query.sort ?? "sort_rating_desc";
  let url = `http://localhost:3000/api/movies?sort=${sort}`;

  if (query.search) {
    url += `&search=${query.search}`;
  }

  if (query.genre) {
    url += `&genre=${query.genre}`;
  }

  const listResponse = await fetch(url);
  const movies = await listResponse.json();
  let movieBanner = movies.data[Math.floor(Math.random() * movies.data.length)];

  return {
    props: {
      movies: movies.data,
      movieBanner,
    },
  };
}
