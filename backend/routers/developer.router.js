import express from "express";
import developerController from "../Controllers/developer.controller.js"
import { router } from './init.sequelizer.router.js';

const controller = new developerController()

router.get("/developer", (req, res) => {
    controller.list(req, res)
})

router.get('/developer:id([0-9]*)', (req, res) => {
    controller.get(req, res)
})

export {router}