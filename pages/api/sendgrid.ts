import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import sendgrid from '@sendgrid/mail'
import NextCors from 'nextjs-cors'

sendgrid.setApiKey(
    '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'
)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.body)

    if (req.method === 'POST') {
        console.log(req.body)
    }

    await NextCors(req, res, {
        // Options
        methods: ['POST'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: 'sunpowerindonesia@gmail.com', // Your email where you'll receive emails
            from: 'sunpowerindonesia@gmail.com', // your website email address here
            subject: `${req.body.subject}`,
            text: 'and easy to do anywhere, even with Node.js',
            html: `<div>
            
            dari ${req.body.name} dengan email ${req.body.email}, isi : 

            ${req.body.message}</div>`,
        })
    } catch (error) {
        // console.log(error);
        return res
            .status(error.statusCode || 500)
            .json({ error: error.message })
    }

    return res.status(200).json({ error: '' })
}
