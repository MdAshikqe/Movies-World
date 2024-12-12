/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, {NextFunction, Request, Response } from 'express'
import { MovieRoutes } from './modules/movies/movie.route'
import notFound from './middleWare/NotFound'
import globalErrorHandler from './middleWare/globalErrorHandler'
import { UserRoutes } from './modules/user/user.route'
import { AuthRouter } from './modules/auth/auth.route'
const app = express()

app.use(express.json())

app.use("/api/movies",MovieRoutes)
app.use("/api/users",UserRoutes)
app.use("/api/auth",AuthRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!----------')
})

//not found
app.use(notFound)

//global error handller
app.use(globalErrorHandler)


export default app;