import { model, Schema } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema=new Schema<TReview>({
    movie:{
        type:Schema.Types.ObjectId,
        ref:"Movie",
        required:true
    },
    email:{
        type:String,
        required: [true,"Email is required"]
    },
    rating:{
        type: Number,
        required:[true,"Rating is required"]
    },
    comment:{
        type:String,
        required:[true, "Comment is requird"]
    }
})

//create a review Schema
export const Review= model<TReview>("Review",reviewSchema);
