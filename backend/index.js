// const express = require('express')
// const app = express();

import dotenv from 'dotenv';
import express from 'express'

import {router as GamesRouter} from './routers/games.router.js'
import {router as developerRouter} from './routers/developer.router.js'

const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(GamesRouter)
app.use(developerRouter)

dotenv.config();

app.listen(4000, (req,res)=>{
     console.log("server is running successfully")
})