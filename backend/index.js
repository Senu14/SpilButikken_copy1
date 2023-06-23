// const express = require('express')
// const app = express();

import dotenv from 'dotenv';
import express from 'express'

import {router as GamesRouter} from './routers/games.router.js'

const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(GamesRouter)

dotenv.config();

app.listen(4000, (req,res)=>{
     console.log("server is running successfully")
})