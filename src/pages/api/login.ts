// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from '@prisma/client'
import crypto from 'crypto'

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        // Process a POST request
        const {email, password} = req.body
        if (email && password) {
            //
            const result = await prisma.user.findFirst({
                where: {
                    email: email,
                }
            })

            if (result) {
                let hashPwd = crypto.createHash('md5').update(password).digest('hex');
                if (result.password === hashPwd) {
                    //login ok
                    return res.status(200).json(result)
                }
            }
        } else {
            res.status(400)
        }
    } else {
        // Handle any other HTTP method
        res.status(400)
    }
}
