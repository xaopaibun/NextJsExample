import { NextApiRequest, NextApiResponse } from 'next'
let url = 'mongodb+srv://Xaopaibun:vanquy@cluster0.bxvyn.mongodb.net/ChatSocket';
export default function handler(req : NextApiRequest, res : NextApiResponse) {
    res.status(200).json({name : "Pham Jin"})
}