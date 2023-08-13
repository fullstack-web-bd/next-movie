import { Dropdown } from "flowbite-react";
import { useState } from "react";
import SectionHeader from "@/components/section-header";
import Movie from "@/components/movies/single-movie";
import { useRouter } from "next/router";

export default function ({ movies, title = null, enableSorting = true }) {
  const router = useRouter();
  const [filterType, setFilterType] = useState("popular");

  const replaceRouterWithQuery = (sortKey: string) => {
    console.log("sortKey", sortKey);
    router.replace({
      query: {
        ...router.query,
        sort: sortKey,
      },
    });
  };

  const setQueryFilter = (filter: string) => {
    setFilterType(filter);

    if (filter === "popular") {
      replaceRouterWithQuery("sort_rating_desc");
    } else if (filter === "latest") {
      replaceRouterWithQuery("sort_year_desc");
    } else if (filter === "oldest") {
      replaceRouterWithQuery("sort_year_asc");
    }
  };

  return (
    <>
      <SectionHeader title={`${(title ?? filterType).toUpperCase()} MOVIES`}>
        {enableSorting && (
          <div className="border border-1 rounded-lg px-5 py-2 text-white text-sm">
            <Dropdown
              inline
              label={filterType.toUpperCase()}
              className="bg-transparent"
            >
              <Dropdown.Item onClick={() => setQueryFilter("popular")}>
                Popular
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setQueryFilter("latest")}>
                Latest
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setQueryFilter("oldest")}>
                Oldest
              </Dropdown.Item>
            </Dropdown>
          </div>
        )}
      </SectionHeader>

      <div className="flex flex-wrap gap-4">
        {movies.map((movie) => (
          <Movie key={movie.slug} movie={movie} />
        ))}

        {movies.length === 0 && (
          <div className="text-center w-full text-white text-2xl">
            No movies found
          </div>
        )}
      </div>
    </>
  );
}
