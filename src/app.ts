import express, { Application, Request, Response } from 'express'
import cors from 'cors'



import globalErrorHandler from './middleware/globalErrorhandler'
import notFound from './middleware/notFound'
import router from './routes'

const app: Application = express()


// parser 
app.use(express.json())
app.use(cors())

// api 

app.use("/api", router)


app.get('/', (req: Request, res: Response) => {
     res.send('welcome to assignment project...')
})





app.use(globalErrorHandler)
app.use(notFound)

export default app