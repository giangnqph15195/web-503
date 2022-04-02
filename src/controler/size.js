import Size from '../models/size'
export const listsz = async (req, res) => {
    const ListSz = await Size.find().exec()
    res.json(ListSz)
}