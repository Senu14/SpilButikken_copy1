import UserModel from "../Model/user.model.js"

class userController {
    list = async (req, res) => {
        const result = await UserModel.findAll({
            attributes: ["first_name", "last_name", "email", "password"]
        })
        res.json(result)
    }
}

export default userController