import { getFlagImageUrl } from "@/utils/flag-generator";
import { Rating } from "flowbite-react";
import Image from "next/image";
import MovieTrailer from "../movies/movie-trailer";
import Link from "next/link";
import AddToWatchListIcon from "../watchlist/icon";

interface IMovieBanner {
  addToWatchList?: boolean;
}

export default function ({ addToWatchList = false, movie }: IMovieBanner) {
  if (!movie) {
    return null;
  }

  const languages = movie?.language
    .split(",")
    .map((lang: string) => lang.trim());

  return (
    <div className="max-w-[100%] relative">
      <Image
        src={movie.poster}
        alt=""
        width={0}
        height={0}
        sizes="80vw"
        className="w-full h-auto max-h-[400px] rounded-xl"
      />

      <div
        className="absolute top-0 opacity-30 w-[250px] h-[400px]"
        style={{ boxShadow: "inset 247px 20px 144px -102px black" }}
      ></div>

      <div className="absolute text-white top-20 left-5">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold mb-2">
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </h2>
          {addToWatchList && <AddToWatchListIcon movie={movie} />}
        </div>
        {movie?.subheading && movie?.subheading.length > 0 && (
          <h3 className="text-xl font-thin">{movie?.subheading ?? ""}</h3>
        )}

        <div className="flex mt-10 gap-6 items-center">
          <div>
            <Rating>
              <span className="bg-yellow-500 px-3 py-1 text-xs rounded text-black">
                IMDB
              </span>
              <Rating.Star />
              {movie.imdb_rating}
            </Rating>
          </div>

          <div className="flex text-xs">
            {languages.map((lang: string) => (
              <span key={lang} className="flex items-center gap-1 mr-2">
                {typeof getFlagImageUrl(lang) === "string" && (
                  <img
                    src={getFlagImageUrl(lang)}
                    alt=""
                    width={30}
                    className="mr-3"
                  />
                )}

                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden sm:block">
          <MovieTrailer movie={movie} />
        </div>
      </div>
    </div>
  );
}
