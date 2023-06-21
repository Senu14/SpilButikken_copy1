import developerModel from "../Model/developer.model.js"

developerModel

class developerController {
    list = async (req, res) => {
        const result = await developerModel.findAll({
            attributes: ["name"], //Controlleren har kun tilladelse til at finde name

        })
        res.json(result)
    }
} 

export default developerController