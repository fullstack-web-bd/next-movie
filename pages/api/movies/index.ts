// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as moviesJson from "@/utils/movies.json";
import { generateResponse } from "@/utils/response-generator";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET /api/movies
  if (req.method === "GET") {
    const movies = moviesJson.default;
    let filteredMovies = movies;
    const sorting = req.query.sort || "sort_rating_desc";

    // Sorting
    if (sorting === "sort_year_asc") {
      filteredMovies.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    } else if (sorting === "sort_year_desc") {
      filteredMovies.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    } else if (sorting === "sort_rating_asc") {
      filteredMovies.sort(
        (a, b) => parseFloat(a.imdb_rating) - parseFloat(b.imdb_rating)
      );
    } else {
      // Default is sort by rating descending.
      filteredMovies.sort(
        (a, b) => parseFloat(b.imdb_rating) - parseFloat(a.imdb_rating)
      );
    }

    // Filter by coming soon
    if (req.query.coming_soon) {
      filteredMovies = filteredMovies.filter((m) => m.coming_soon === true);
    }

    // Filter by genre
    if (req.query.genre) {
      const genre = req.query.genre.toString().toLowerCase();

      filteredMovies = filteredMovies.filter((m) => {
        return m.genre.toLowerCase().includes(genre);
      });
    }

    // Search Filter
    if (req.query.search) {
      const searchText = req.query.search.toString().toLowerCase();

      filteredMovies = filteredMovies.filter((m) => {
        const searchableString = `${m.title} ${m.slug} ${m.year} ${m.director} ${m.actors} ${m.genre} ${m.plot}`;

        return searchableString.toLowerCase().includes(searchText);
      });
    }

    res
      .status(200)
      .json(
        generateResponse(
          res,
          filteredMovies,
          200,
          `Movies list fetched successfully.`
        )
      );
  }
}
