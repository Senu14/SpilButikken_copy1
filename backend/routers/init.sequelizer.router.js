import express from 'express'
import { sequelize } from '../Config/db.sequelize.js'


const router = express.Router()

import GamesModel from '../Models/games.model.js'



router.get('/init', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err) {
        res.send(err)
    }
})

export {router}