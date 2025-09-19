import express from "express"
import logger from "./config/logger.js";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined',{stream:{write:(message)=>{logger.info(message.trim())}}}))


app.get('/health', (req,res)=>{
    res.status(200).send('Healthy hai kya bhai')
})

app.get('/api', (req,res)=>{
    res.status(200).send('Acquisition API running smoothly')
})

app.get('/', (req,res)=>{
    logger.info("Hello from Acquisitions man")
    res.send('Hello for Acquisitions.com').status(200)
})

app.use('/api/auth', authRoutes)

export default app;