import { model,Schema } from "mongoose";
import { TMovie,TReview } from "./movie.interface";

const reviewSchema=new Schema<TReview>({
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

const movieSchema= new Schema<TMovie>({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    releaseDate:{
        type:Date
    },
    genre:{
        type:String,
        required:[true,"Genre is required"]
    },
    reviews:{
        type:[reviewSchema]
    },
    // slug:{
    //     type:String
    // },
    viewCount:{
        type:Number,
        default:0
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
});

//create a model
export const Movie= model<TMovie>("Movie",movieSchema);