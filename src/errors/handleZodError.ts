import { ZodError } from "zod";

const handleZodError = (err:ZodError)=>{
    const errorSource= err.issues.map((error)=>{
        return {
            path:error.path[error.path.length -1],
            message:error.message
        }
    })
    const statuscode= 404;
    return {
        statuscode,
        message:"Zod Error",
        errorSource
    }
}

export default handleZodError;