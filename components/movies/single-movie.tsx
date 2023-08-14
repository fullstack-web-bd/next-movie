import { Card, Rating } from "flowbite-react";
import Link from "next/link";
import AddToWatchListIcon from "@/components/watchlist/icon";
import { IMovie } from "@/interfaces";

export default function SingleMovie({ movie }: { movie: IMovie }) {
  return (
    <div className="basis-[23.6%]">
      <Card
        className="relative border-1 border-slate-900 !bg-transparent"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={movie?.poster ?? "/movies/placeholder.png"}
      >
        <div className="absolute top-0 right-1">
          <AddToWatchListIcon movie={movie} />
        </div>
        <Link href={`/movies/${movie.slug}`}>
          <h5 className="text-2xl font-bold tracking-tight text-white dark:text-gray-900">
            <div className="flex justify-between items-center">
              <div>{movie.title}</div>
              <div className="text-sm">
                <Rating>
                  <Rating.Star />
                  <span>{movie.imdb_rating}</span>
                </Rating>
              </div>
            </div>
            <p className="text-xs font-thin uppercase">
              {movie?.subheading ?? ""}
            </p>
          </h5>
          <div className="flex gap-2">
            <div>
              <i className="bi bi-person-circle text-primary text-3xl"></i>
            </div>
            <div>
              <h3 className="text-xs">
                Directed by
                <br />
                {movie?.director ?? ""}
                <i className="bi bi-check-circle-fill ml-2 text-green-500"></i>
              </h3>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
}
