import express from 'express'
import userController from '../Controllers/user.controller.js';
import { router } from './init.sequelizer.router.js';

const router = express.Router()

const controller = new userController()

router.get('/games', (req, res) => {
    controller.list(req, res)
})

router.get('/games/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})

export {router}