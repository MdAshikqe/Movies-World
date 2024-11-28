import { Request, Response } from "express";
import { ReviewService } from "./review.service";

const addReview= async (req:Request,res:Response)=>{
    const {slug}= req.params;
    const reviewData=req.body;
    const result= await ReviewService.addReview(slug,reviewData)

    res.json({
        success:true,
        message: "Review is created successfully",
        data:result
    })
}

export const ReviewController={
    addReview
}