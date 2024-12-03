import  express from "express"
import { MovieController } from "./movie.controller";
import { ReviewController } from "../reviews/review.controller";
import validateZodRequest from "../../middleWare/validateZodRequext";
import { zodMovieSchema } from "./movie.validation";
const router=express.Router();



router.post("/",validateZodRequest(zodMovieSchema.createZodValidationSchema), MovieController.createMovies)
router.get("/",MovieController.getAllMovies)
router.get("/:movieId",MovieController.getMovieById)
router.get("/:slug",MovieController.getMovieBySlug)
router.post("/:slug/review", ReviewController.addReview)



export const MovieRoutes= router;