import GamesModel from '../Model/games.model.js'

class GamesController {
    list = async (req, res) => {
        const result = await GamesModel.findAll()
        
        result.forEach(element =>{
            let image = new Buffer.from(element.image).toString('utf8')
            element.image = image
        })

        res.json(result)
    }

    get = async (req, res) => {
        const result = await GamesModel.findAll({
            where: {id: req.params.id}
        })
        res.json(result)
    }
}

export default GamesController