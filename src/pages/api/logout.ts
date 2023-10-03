// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from "next";
import {deleteCookie} from "cookies-next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    deleteCookie('login_token')
    return res.status(200).json({})
}
