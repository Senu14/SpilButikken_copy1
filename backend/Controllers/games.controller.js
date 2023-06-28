import GamesModel from '../Model/games.model.js'
import { Op } from 'sequelize'; // work with SQL filter

class GamesController {
    list = async (req, res) => {
        const { maxPrice } = req.query;

        const result = await GamesModel.findAll({
            where: maxPrice ? { price: { [Op.lte]: maxPrice } } : {}, 
            order: [
                ['release_date', 'DESC'],
            ]
        })

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