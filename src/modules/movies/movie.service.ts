import { QueryBuilder } from "../../builder/QueryBuilder";
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
const getAllMovies= async(payload: Record<string,unknown>)=>{

    const movieQuery= new QueryBuilder(Movie.find({}),payload)
    .filter()
    .search(["title","genre"])
    .paginate()
    .sort()
    .fields();

    const result = await movieQuery.modelQuery;
    return result;
    

    //--------------searching------
    // let searchTerm= "";
    // if(payload?.searchTerm){
    //     searchTerm = payload.searchTerm as string ;
    // }
    // const searchAbleField= ["title", "genre"];
    // const searchMovies= Movie.find({
    //     $or:searchAbleField.map(field=>({
    //         [field]:{$regex:searchTerm, $options:"i"}
    //     }))
    // });

      //pagination 
    //1st skip 0
    //2nd skip = 2*10 - 1*10
    //3rd skip = 3*10 - 2*10
    //-----formula:  skip=(page-1)*10

    //----pagination
    // const limit: number= Number(payload?.limit || 10);
    // let skip:number=0;

    // if(payload?.page){
    //     const page= Number(payload?.page || 1)
    //     skip=Number((page-1)*limit)
    // }
    // const skipedQuery=searchMovies.skip(skip)
    // const limitQuery= skipedQuery.limit(limit);

    // //create sorting
    // let sortBy="-releaseDate";
    // if(payload?.sortBy){
    //     sortBy= payload.sortBy as string;
    // }
    // const sortQuery = limitQuery.sort(sortBy);

    // //feilds Filtaring
    // let fields= " ";
    // if(payload?.fields){
    //     fields = (payload?.fields as string).split(",").join(" ")
    // }
    // const fieldQuery= sortQuery.select(fields);

    // //filtaring movies
    // const queryObj= {...payload};
    // const excludeFields=["searchTerm","page","limit","sortBy","fields"];
    // excludeFields.forEach((e)=> delete queryObj[e]);
    // const result= await fieldQuery.find(queryObj)
    
    // return result;
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