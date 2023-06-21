import reviewModel from "../Model/review.model.js"

reviewModel

class reviewModel {
    list = async (req, res) => {
        const result = await reviewModel.findAll({
            attributes: ["title", "comment", "rating"]
        })
        res.json(result)
    }
}

export default reviewController