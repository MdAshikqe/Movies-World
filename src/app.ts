import express, {Request, Response } from 'express'
import { MovieRoutes } from './modules/movies/movie.route'
import notFound from './middleWare/NotFound'
const app = express()

app.use(express.json())

app.use("/api/movies",MovieRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!----------')
})

app.use(notFound)

export default app;