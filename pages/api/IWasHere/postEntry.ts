import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

const entrysPath = "./entrys.json"

const entrys: entry[] = []

type Response = {
    status: string
    entrys: entry[]
}

type entry = {
    name: string
    text: string
    date: Date
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    const entrys = req.body
    writeFileSync(entrys);
}

const writeFileSync = (entrys: entry[]) => {
    fs.writeFileSync(entrysPath, JSON.stringify(entrys))
}