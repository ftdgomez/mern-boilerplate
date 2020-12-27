import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import connectDB from './config/db.js'
import path from 'path' 
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()
 
app.use(cors())

if (process.env.NODE_ENV === 'development')
{
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/users', userRoutes)

const __dirname = path.resolve()
app.use('/public', express.static(path.join(__dirname, '/public')))

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
