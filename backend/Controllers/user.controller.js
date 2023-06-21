import userModel from "../Model/user.model.js"
import reviewController from "./review.controller.js"

userModel

class userModel {
    list = async (req, res) => {
        const result = await userModel.findAll({
            attributes: ["first_name", "last_name", "email", "password"]
        })
        res.json(result)
    }
}

export default reviewController