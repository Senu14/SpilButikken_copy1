import express, { response } from "express"
import review, from "../Controllers/review.controller.js"
import developerController from "../Controllers/developer.controller"

const reviewRouter = express.Router()
const controller = new developerController()

reviewRouter.get("/developer", (req, res) => {
    controller.list(req, res)
})

reviewRouter.get('/developer:id([0-9]*)', (req, res) => {
    console.log(req.params);
    res.send('Hent detaljer')
})

reviewRouter.post('/developer', (req, res) => {
    console.log((req.body));
    res.send('Opret ny')
})

reviewRouter.put('/developer', (req, res) => {
    console.log(req.body);
    res.send('Opdater')
})

reviewRouter.delete('developer', (req, res) => {
    console.log(req.query);
    res.send('Slet')
})