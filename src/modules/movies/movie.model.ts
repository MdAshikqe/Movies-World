import { model,Schema } from "mongoose";
import { TMovie} from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";


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
    slug:{
        type:String
    },
    viewCount:{
        type:Number,
        default:0
    },
    totalRating:{
        type:Number,
        default:0
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
});


//pree hook middleware slug
movieSchema.pre('save', function(next) {
    //create slug
    const  date= format(this.releaseDate,"dd-MM-yyyy");
    this.slug= slugify(`${this.title}-${date}`,{lower:true});
    next();
  });

//create a model
export const Movie= model<TMovie>("Movie",movieSchema);