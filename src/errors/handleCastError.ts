import mongoose from "mongoose";

const handleCastError =(err:mongoose.Error.CastError)=>{
   const errorSource=[
        {
            path:err?.path,
            message:err?.message
        }
   ]
   return {
        message:"CastError",
        errorSource
   }

}

export default handleCastError;