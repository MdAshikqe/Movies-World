import { Request, Response } from "express";
import { MovieService } from "./movie.service";


//create movies
const createMovies= async (req:Request,res:Response)=>{
    const movieData=req.body;
    const result= await MovieService.createMovies(movieData)
    
    res.send({
        success:true,
        message:'Movie created successfully',
        data:result
    })

}
//get all movies
const getAllMovies= async(req:Request,res:Response)=>{
       try{
        const result= await MovieService.getAllMovies()
        
        res.send({
            success:true,
            message:'successfully fetch all movies',
            data:result
        })
       }catch(err){
            res.status(500).json({
                success:false,
                message:'All Movies fetch are faild !',
                error:err
            })
       }
}


//get single movie by id-----
const getMovieById= async (req:Request,res:Response)=>{
    try{
        const {movieId}=req.params;
    const result= await MovieService.getMovieById(movieId)

    res.send({
        success:true,
        message:'Movie are fetch successfully',
        data:result
    })
    }catch(err){
        res.status(500).json({
            success:false,
            message:'Could not fetch movies',
            error:err
        })
    }

}

//get slug
const getMovieBySlug=async(req:Request,res:Response)=>{
    try{
        const {slug}=req.params;
    const result= await MovieService.getMovieBySlug(slug)
    res.send({
        success:true,
        message:"Movies fetch slug successfully",
        data:result
    })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"could not slug fetch susccessfully",
            data:err
        })
    }

}

export const MovieController={
    createMovies,
    getAllMovies,
    getMovieById,
    getMovieBySlug
}