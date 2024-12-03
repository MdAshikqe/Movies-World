import { z } from "zod";

const createZodValidationSchema= z.object({
    // body:z.object({
    title:z.string(),
    description:z.string(),
    releaseDate:z.string().date("Please provide a valid date in this format YYYY-MM-DD"),
    genre:z.string()
    // })
    
})

export const zodMovieSchema ={
    createZodValidationSchema
}