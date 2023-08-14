import MovieBanner from "@/components/movie-banner";
import MovieDetails from "@/components/movies/movie-details";
import { IMovie } from "@/interfaces";

export default function MovieDetailPage({ movie }: { movie: IMovie }) {
  return (
    <main>
      <MovieBanner addToWatchList={true} movie={movie} />

      <MovieDetails movie={movie} />
    </main>
  );
}

export async function getServerSideProps({ params, res }) {
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=60, stale-while-revalidate=59"
  // );

  const { slug } = params;
  const detailResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}movies/${slug}`
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
