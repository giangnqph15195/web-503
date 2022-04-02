import Card from "../models/card"

export const listcard = async (req, res) => {
    try {
        const ListCard = await Card.find().exec()
        res.json(ListCard)
    } catch (error) {
        
    }
}

export const addcard = async (req,res) => {
    try {
        const Addcard = await new Card(req.body).save()
        res.json(Addcard)

    } catch (error) {
        
    }
}

export const listcards = (req, res) => {
    try {
        
    } catch (error) {
        
    }
}