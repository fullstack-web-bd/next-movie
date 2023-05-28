import MovieBanner from '@/components/movie-banner';
import MovieDetails from '@/components/movies/movie-details';

export default function Home() {
  return (
    <main>
      <MovieBanner addToWatchList={true} />

      <MovieDetails />
    </main>
  )
}
