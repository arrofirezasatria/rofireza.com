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
                        Name: `${req.body.name}`,
                    },
                    To: [
                        {
                            Email: 'cs@sunpower.id',
                            Name: 'sun power ceramics',
                        },
                    ],
                    Subject: `${req.body.category} - ${req.body.name}`,
                    TextPart:
                        'Dear passenger 1, welcome to Mailjet! May the delivery force be with you!',
                    HTMLPart: `<!DOCTYPE html>
                  <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
                    <head>
                      <meta charset="utf-8" />
                      <meta name="x-apple-disable-message-reformatting" />
                      <meta name="viewport" content="width=device-width, initial-scale=1" />
                      <meta
                        name="format-detection"
                        content="telephone=no, date=no, address=no, email=no"
                      />
                      <meta name="color-scheme" content="light dark" />
                      <meta name="supported-color-schemes" content="light dark" />
                      <!--[if mso]>
                        <noscript>
                          <xml>
                            <o:OfficeDocumentSettings
                              xmlns:o="urn:schemas-microsoft-com:office:office"
                            >
                              <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                          </xml>
                        </noscript>
                        <style>
                          td,
                          th,
                          div,
                          p,
                          a,
                          h1,
                          h2,
                          h3,
                          h4,
                          h5,
                          h6 {
                            font-family: "Segoe UI", sans-serif;
                            mso-line-height-rule: exactly;
                          }
                        </style>
                      <![endif]-->
                      <title>Confirm your email address</title>
                      <style>
                        @media (max-width: 600px) {
                          .sm-w-full {
                            width: 100% !important;
                          }
                          .sm-py-8 {
                            padding-top: 32px !important;
                            padding-bottom: 32px !important;
                          }
                          .sm-px-6 {
                            padding-left: 24px !important;
                            padding-right: 24px !important;
                          }
                          .sm-leading-8 {
                            line-height: 32px !important;
                          }
                        }
                      </style>
                    </head>
                    <body
                      style="
                        word-break: break-word;
                        -webkit-font-smoothing: antialiased;
                        margin: 0;
                        width: 100%;
                        background-color: #f8fafc;
                        padding: 0;
                      "
                    >
                      <div style="display: none">
                        ${req.body.comment}
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
                      </div>
                      <div
                        role="article"
                        aria-roledescription="email"
                        aria-label="Confirm your email address"
                        lang="en"
                      >
                        <table
                          style="
                            width: 100%;
                            font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI',
                              sans-serif;
                          "
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td align="center" style="background-color: #f8fafc">
                              <table
                                class="sm-w-full"
                                style="width: 600px"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    class="sm-py-8 sm-px-6"
                                    style="padding: 48px; text-align: center"
                                  >
                                    <a href="https://sunpower.id">
                                      <img
                                        src="https://ik.imagekit.io/sunpowerindonesia/logospc_17kb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642661887181"
                                        width="160"
                                        alt="Sun Power"
                                        style="border: 0; max-width: 100%; vertical-align: middle"
                                      />
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" class="sm-px-6">
                                    <table
                                      style="width: 100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                    >
                                      <tr>
                                        <td
                                          class="sm-px-6"
                                          style="
                                            border-radius: 4px;
                                            background-color: #fff;
                                            padding: 48px;
                                            text-align: left;
                                            font-size: 16px;
                                            line-height: 24px;
                                            color: #334155;
                                            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                                          "
                                        >
                                          <p>Good Morning,</p>
                                          <p
                                            class="sm-leading-8"
                                            style="
                                              margin: 0;
                                              margin-bottom: 8px;
                                              font-size: 18px;
                                              font-weight: 600;
                                              color: #000;
                                            "
                                          >
                                            Dari: ${req.body.name}
                                          </p>
                                          <p style="margin-bottom: 4px; font-size: 14px">
                                            Category: ${req.body.category} - 
                                            ${
                                                new Date(
                                                    req.body.date
                                                ).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                }) +
                                                ', ' +
                                                new Date(
                                                    req.body.date
                                                ).getDay() +
                                                ' ' +
                                                new Date(
                                                    req.body.date
                                                ).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    year: 'numeric',
                                                })
                                            }
                                          </p>
                                          <p style="margin-top: 4px; font-size: 14px">
                                            Phone Number: ${
                                                req.body.phoneNumber
                                            }, Email:
                                            ${req.body.email}
                                          </p>
                                          <p style="margin: 0; margin-bottom: 24px">
                                          ${req.body.comment}
                                          </p>
                                          <p style="font-size: 12px; margin-bottom: 0px">
                                          Subscribe Newsletter : ${
                                              req.body.subscribeNewsletter
                                          }
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="height: 32px"></td>
                                      </tr>
                                      <tr>
                                        <td
                                          style="
                                            padding-left: 24px;
                                            padding-right: 24px;
                                            text-align: center;
                                            font-size: 12px;
                                            color: #475569;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              margin-bottom: 16px;
                                              text-transform: uppercase;
                                            "
                                          >
                                            Powered by Rofi Reza Dev
                                          </p>
                                          <p style="margin: 0; font-style: italic">
                                            This email generated automatically please respond to
                                            the complainer email
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </body>
                  </html>
                  `,
                },
            ],
        })

        request
            .then((result) => {
                // return result
                console.log(result.body)
                return res.status(200).send(result.body)
            })
            .catch((err) => {
                // return err
                console.log(err.statusCode)
                return res.status(400).send(err.statusCode)
            })
    }
}
