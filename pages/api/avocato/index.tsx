import DB from '@database'
import { NextApiResponse } from 'next'

const getAllAvocatos = async (_, res: NextApiResponse) => {
    const db = new DB()
    const allAvocatos = await db.getAll()

    res.status(200).json({ length: allAvocatos.length, data: allAvocatos })
}

export default getAllAvocatos