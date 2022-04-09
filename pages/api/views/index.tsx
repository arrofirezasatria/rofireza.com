import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        return res.status(200).json({ message: 'views api is work', succes: 'true' })
    } catch (error) {
        return res.status(200).json({ message: error, succes: 'false' })
    }
}