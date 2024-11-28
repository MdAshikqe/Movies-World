/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { ReviewService } from "./review.service";
import { catchAsync } from "../../utils/catchAsync";

// const addReview2= async (req:Request,res:Response,next:NextFunction)=>{
//    try {
//     const {slug}= req.params;
//     const reviewData=req.body;
//     const result= await ReviewService.addReview(slug,reviewData)

//     res.json({
//         success:true,
//         message: "Review is created successfully",
//         data:result
//     })
//    } catch (error) {
//         res.status(500).json({
//             success:false,
//             message:"Review not succesfully create"
//         })
//    }
// }

const addReview= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const {slug}= req.params;
        const reviewData=req.body;
        const result= await ReviewService.addReview(slug,reviewData)
    
        res.json({
            success:true,
            message: "Review is created successfully",
            data:result
        })

    })





export const ReviewController={
    addReview
}