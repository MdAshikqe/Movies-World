import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
// import { format } from "date-fns";
// import slugify from 'slugify';

//create movies
const createMovies= async(payload:TMovie)=>{
    // //create slug----------
    // const date= format(payload.releaseDate,"dd-MM-yyyy");
    // const slug= slugify(`${payload.title}-${date}`,{lower:true});

    // const result= await Movie.create({...payload, slug})
    const result= await Movie.create(payload)
    return result;
}

//get all movies
const getAllMovies= async()=>{
    const result= await Movie.find()
    return result;
}

//get single movie by id-----
const getMovieById= async(id:string)=>{
    const result= await Movie.findById(id)
    return result;
}

//get find the slug
const getMovieBySlug= async(slug:string)=>{
    const result= await Movie.findOne({slug:slug})
    return result;
}




export const MovieService={
    createMovies,
    getMovieById,
    getAllMovies,
    getMovieBySlug
}