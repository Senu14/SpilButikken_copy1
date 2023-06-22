import express, { response } from "express";
import developerController from "../Controllers/developer.controller.js"

const developerRouter = express.Router()
const controller = new developerController()

developerRouter.get("/developer", (req, res) => {
    controller.list(req, res)
})

developerRouter.get('/developer:id([0-9]*)', (req, res) => {
    console.log(req.params);
    res.send('Hent detaljer')
})

developerRouter.post('/developer', (req, res) => {
    console.log((req.body));
    res.send('Opret ny')
})

developerRouter.put('/developer', (req, res) => {
    console.log(req.body);
    res.send('Opdater')
})

developerRouter.delete('developer', (req, res) => {
    console.log(req.query);
    res.send('Slet')
})