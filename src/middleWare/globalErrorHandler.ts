/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { TErrorSource } from "../interface/error.interface";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";

const globalErrorHandler:ErrorRequestHandler= (err, req, res, next)=>{
    let statusCode=500;
    let message="Something went wrong!";
    let errorSource:TErrorSource=[{
        path: "",
        message:"Something went wrong!"
    }]
    if(err.name === "ValidationError"){
        const simplified= handleValidationError(err);
        message=simplified.message
        errorSource= simplified.errorSource;
    }
    else if(err.name === "CastError"){
        const simplified= handleCastError(err);
        message=simplified.message
        errorSource=  simplified.errorSource;
    }
    else if(err.code ===11000){
        const simplified= handleDuplicateError(err);
        errorSource= simplified.errorSource;
    }
    //instanceof korte hobe zodError time
    else if(err instanceof ZodError){
        const simplified= handleZodError(err)
        statusCode= simplified.statuscode;
        message=simplified.message
        errorSource= simplified.errorSource;
        
    }           

    res.status(500).json({
        success:false,
        message, 
        errorSource,
    })
}

export default globalErrorHandler;