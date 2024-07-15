import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
    status: string
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    res.status(200).json({ status: 'ok', message: 'Event received' })
}