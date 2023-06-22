import reviewModel from "../Model/review.model.js"


class reviewController {
    list = async (req, res) => {
        const result = await reviewModel.findAll({
            attributes: ["title", "comment", "rating"]
        })
        res.json(result)
    }
}

export default reviewController