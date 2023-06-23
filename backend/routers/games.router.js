import express from 'express'
import GamesController from '../Controllers/games.controller.js';
import { router } from './init.sequelizer.router.js';

// const router = express.Router()

const controller = new GamesController()

router.get('/games', (req, res) => {
    controller.list(req, res)
})

router.get('/games/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})

export {router}