import  express from "express"
import { MovieController } from "./movie.controller";
const router=express.Router();

router.post("/", MovieController.createMovies)
router.get("/",MovieController.getAllMovies)
router.get("/:movieId",MovieController.getMovieById)



export const MovieRoutes= router;