import MovieBanner from '@/components/movie-banner'
import Movies from '@/components/movies'
import { Inter } from 'next/font/google'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const { movies } = useSelector((state) => state.movie);

  return (
    <main>
      <MovieBanner />
      <Movies />
    </main>
  )
}
