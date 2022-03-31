import Card from "../models/card"

export const listcard = async (req, res) => {
    try {
        const ListCard = await Card.find().exec()
        res.json(ListCard)
    } catch (error) {
        
    }
}