/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { TErrorSource } from "../interface/error.interface";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";

const globalErrorHandler:ErrorRequestHandler= (err, req, res, next)=>{
    // let statusCode=500;
    const message="Something went wrong!";
    let errorSource:TErrorSource=[{
        path: "",
        message:"Something went wrong!"
    }]
    if(err.name === "ValidationError"){
        const simplified= handleValidationError(err);
        errorSource= simplified.errorSource;
    }
    else if(err.name === "CastError"){
        const simplified= handleCastError(err);
        errorSource=  simplified.errorSource;
    }
    else if(err.code ===11000){
        const simplified= handleDuplicateError(err);
        errorSource= simplified.errorSource;
    }

    res.status(500).json({
        success:false,
        message,
        errorSource, 
    })
}

export default globalErrorHandler;