// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as moviesJson from "@/utils/movies.json";
import { generateResponse } from "@/utils/response-generator";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const movies = Object.values(moviesJson);

  // GET /api/movies/[slug]
  if (req.method === "GET") {
    // Find the movie by that slug.
    const movie = movies.find((m) => m.slug === req.query.slug);

    if (!movie)
      res
        .status(404)
        .json(
          generateResponse(
            res,
            null,
            200,
            `Movie with slug '${req.query.slug}' not found.`
          )
        );

    res.status(200).json(generateResponse(res, movie, 200, `Movie found.`));
  }
}
