import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

const Mailjet = require('node-mailjet')
const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_PUBLIC_API,
    process.env.MAILJET_SECRET_API
)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.body)

    await NextCors(req, res, {
        // Options
        methods: ['POST'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    if (req.method === 'POST') {
        console.log(req.body)
        const request = mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: 'cs@sunpower.id',
                        Name: 'Mailjet Pilot',
                    },
                    To: [
                        {
                            Email: 'cs@sunpower.id',
                            Name: 'passenger 1',
                        },
                    ],
                    Subject: `${req.body.subject}`,
                    TextPart:
                        'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
                    HTMLPart: `<div>
            
            dari ${req.body.name} dengan email ${req.body.email}, isi : 

            ${req.body.message}</div>`,
                },
            ],
        })

        request
            .then((result) => {
                console.log(result.body)
                return res.status(200).send(result)
            })
            .catch((err) => {
                console.log(err.statusCode)
                return res.status(400).send(err)
            })
    }
    return res.status(200)
}
