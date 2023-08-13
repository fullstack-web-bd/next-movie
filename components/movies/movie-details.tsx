import Link from "next/link";
import SectionHeader from "../section-header";
import MovieGalleryImage from "./movie-gallery";
import { useRouter } from "next/router";
import { Badge } from "flowbite-react";

export default function ({ movie }) {
  const router = useRouter();
  const genres = movie.genre?.split(",") ?? [];

  const goToGenrePage = (genre: string) => {
    router.push({
      pathname: "/",
      query: {
        genre,
      },
    });
  };

  return (
    <>
      <SectionHeader
        title={`${movie.type === "movie" ? "Movie" : "Series"} type`}
        areaClassName="flex-col"
      >
        <div className="tex-xs">
          <div className="flex">
            {genres.map((genre) => (
              <Link
                href={`#`}
                className="text-red hover:text-white mr-2"
                onClick={() => goToGenrePage(genre)}
                key={genre}
              >
                <Badge>{genre ?? ""}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </SectionHeader>

      <SectionHeader title="Plot" areaClassName="flex-col">
        <div className="tex-xs">{movie.plot ?? "N/A"}</div>
      </SectionHeader>

      <SectionHeader title="Director" areaClassName="flex-col">
        <div className="tex-xs">{movie.director ?? "N/A"}</div>
      </SectionHeader>

      <SectionHeader title="Writer" areaClassName="flex-col">
        <div className="tex-xs">{movie.writer ?? "N/A"}</div>
      </SectionHeader>

      <SectionHeader title="Awards" areaClassName="flex-col">
        <div className="tex-xs">{movie.awards ?? "N/A"}</div>
      </SectionHeader>

      <SectionHeader title="Total IMDB votes" areaClassName="flex-col">
        <div className="tex-xs">{movie.awards ?? "N/A"}</div>
      </SectionHeader>

      <SectionHeader title="Cast" areaClassName="flex-col">
        <div className="flex flex-wrap gap-2 mt-2">
          {/* <img
            src="https://www.pngkit.com/png/detail/615-6156135_vin-diesel-vin-diesel-fast-and-furious-png.png"
            className="rounded-full w-20 h-20"
          /> */}
          {movie.actors}
        </div>
      </SectionHeader>

      <SectionHeader title="Gallery" areaClassName="flex-col">
        <div className="tex-xs">
          <div className="flex flex-wrap gap-2 mt-2">
            {movie.images.map((image) => (
              <MovieGalleryImage key={image} image={image} />
            ))}
          </div>
        </div>
      </SectionHeader>
    </>
  );
}
