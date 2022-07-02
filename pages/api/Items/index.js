import dbConnect from '../../../db/db'
import Items from '../../../models/Items'

export default async function handler(req, res) {
    const { method } = req;

    dbConnect()

    if (method === 'GET') {
    	const items = await Items.find()
    	res.status(200).json(items)
    }
    if (method === 'POST') {
    	const item = await Items.create(req.body)
    	res.status(200).json(item)
    }  
}
