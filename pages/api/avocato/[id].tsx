import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const getAvocatoById = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB()
    const id = req.query.id
    const avocato = await db.getById(id as string)

    res.status(200).json(avocato);
}

export default getAvocatoById