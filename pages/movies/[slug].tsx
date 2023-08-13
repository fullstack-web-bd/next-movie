import MovieBanner from "@/components/movie-banner";
import MovieDetails from "@/components/movies/movie-details";

export default function MovieDetail({ movie }) {
  return (
    <main>
      <MovieBanner addToWatchList={true} movie={movie} />

      <MovieDetails movie={movie} />
    </main>
  );
}

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=59"
  );

  const { slug } = params;
  const detailResponse = await fetch(
    `http://localhost:3000/api/movies/${slug}`
  );

  const { data } = await detailResponse.json();

  if (!data.title) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie: data,
    },
  };
}
