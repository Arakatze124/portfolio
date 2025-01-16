import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

const entrysPath = "./entrys.json"

let entrys: entry[] = [

]

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
    entrys = readFile()
    res.status(200).json({ status: 'ok', entrys })
}

const readFile = () => {
    const data = fs.readFileSync(entrysPath, 'utf8')
    return JSON.parse(data)
}