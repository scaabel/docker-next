// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
    switch (req.method) {
        case 'POST': {
            //
        }
        case 'GET': {
            //
        }
        default: {
            res.status(400)
        }
    }
}
