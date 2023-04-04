import { Router } from "express";
import { getMovies } from "../controller/moviesController";

const router = Router();

router.route("/").get(getMovies);

export default router;
