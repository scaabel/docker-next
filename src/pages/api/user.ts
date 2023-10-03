// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from '@prisma/client'
import crypto from 'crypto'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
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
        default: {
            res.status(400)
        }
    }
}
