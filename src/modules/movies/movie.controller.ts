/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { MovieService } from "./movie.service";
import { catchAsync } from "../../utils/catchAsync";



//create movies
const createMovies= async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const movieData=req.body;
        // zodMovieSchema.parse({body:movieData});
    const result= await MovieService.createMovies(movieData)
    
    res.send({
        success:true,
        message:'Movie created successfully',
        data:result
    })
        
    } catch (err) {
        
        // res.status(500).json({
        //     error:err
        // })
        next(err)
    }

}
//get all movies
const getAllMovies= catchAsync(
    async(req:Request,res:Response,next:NextFunction)=>{
        const result= await MovieService.getAllMovies(req.query);
        
        res.status(200).json({
            success:true,
            message:'successfully fetch all movies',
            data:result
        });  
}
)


//get single movie by id-----
const getMovieById= async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {movieId}=req.params;
    const result= await MovieService.getMovieById(movieId)

    res.send({
        success:true,
        message:'Movie are fetch successfully',
        data:result
    })
    }catch(err){
        // res.status(500).json({
        //     success:false,
        //     message:'Could not fetch movies',
        //     error:err
        // })
        next(err)
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