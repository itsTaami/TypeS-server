import { Request, Response } from "express";

import Movie from "../model/Movie";

const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find({}).limit(10);
    res.status(200).json({ message: "All Movies", movies });
  } catch (err) {
    res.status(400).json({
      message: "Movies medeelliig avhad aldaa garlaa",
    });
  }
};

export { getMovies };
