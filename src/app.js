import express from "express"

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello for Acquisitions.com').status(200)
})

export default app;