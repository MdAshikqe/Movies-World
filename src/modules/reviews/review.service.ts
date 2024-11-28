import { Movie } from "../movies/movie.model"
import { TReview } from "./review.interface"
import { Review } from "./review.model"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addReview=async(slug:string, reviewData:Partial<TReview>):Promise<TReview | any>=>{
                const session= await Review.startSession();
                try{
                    session.startTransaction();
                    const movie= await Movie.findOne({slug}).session(session)
                if(!movie){
                    throw new Error("Movie not found")
                }

                const review= await Review.create([{
                    movie: movie._id,
                    ...reviewData
                }],{session})

               
                const reviewCount= await Review.countDocuments({movie:movie._id}).session(session)

                await Movie.updateOne(
                    {slug},
                    {totalRating : reviewCount},
                    {session}
                )
                await session.commitTransaction();
                return review[0];
               
                }catch(err){
                    await session.abortTransaction();
                    throw err;

                }
                session.endSession();
                
                

}

export const ReviewService={
    addReview
}