// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from '@prisma/client'
import crypto from 'crypto'
import {getCookie} from "cookies-next";


const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (!getCookie('login_token', {req, res})) return res.status(403)

    switch (req.method) {
        case 'POST': {
            const {email, password} = req.body
            if (email && password) {
                //
                const result = await prisma.user.create({
                    data: {
                        email: email,
                        password: crypto.createHash('md5').update(password).digest('hex')
                    }
                })
                return res.status(201).json(result)
            }

            return res.status(400)
        }
        case 'GET':
        case 'UPDATE':
        case 'PUT':
        default: {
            res.status(400)
        }
    }
}
