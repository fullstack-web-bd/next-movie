import Movies from "@/components/movies";
import MovieBanner from "@/components/movie-banner";

export default function ComingSoonPage({ movies, movieBanner }) {
  return (
    <main>
      <MovieBanner movie={movieBanner} />
      <Movies movies={movies} title={"Coming Soon"} />
    </main>
  );
}

export async function getServerSideProps({ query, res }) {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=60, stale-while-revalidate=59"
  // );

  const sort = query.sort ?? "sort_rating_desc";
  let url = `${process.env.NEXT_PUBLIC_API_URL}movies?sort=${sort}&coming_soon=true`;

  if (query.search) {
    url += `&search=${query.search}`;
  }

  const listResponse = await fetch(url);
  const movies = await listResponse.json();

  let movieBanner = null;
  if (movies.data.length > 0) {
    movieBanner = movies.data[Math.floor(Math.random() * movies.data.length)];
  }

  return {
    props: {
      movies: movies.data,
      movieBanner,
    },
  };
}
