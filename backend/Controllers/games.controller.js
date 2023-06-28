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
    // create = async (req, res) => {
         
    //     const { title, description, price, stock, image } = req.body;

    //     if (title && description && price && stock  && image) {
    //          const model = await GamesModel.create(req.body)
    //          res.json({ newId: model.id })
    //      } else {
    //          res.sendStatus(418)
    //      }
    //  }
}

export default GamesController