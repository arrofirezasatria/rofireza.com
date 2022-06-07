import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // return await checkNewsletter({ req, res });

    if (req.method == "GET") {
        return await readNewsletter(req, res);
    }

    if (req.method == "POST") {
        return await addNewsletter(req, res);
    }

    return res.status(200).json({ succes: true });
}

async function addNewsletter(req: NextApiRequest, res: NextApiResponse) {
    const bodyReq = req;
    console.log(bodyReq.body);
    try {
        const newEmail = await prisma.newsletter.create({
            data: {
                email: req.body,
            },
        });

        return res.status(200).send({
            email: newEmail.email,
            success: true,
        });
    } catch (error) {
        return res.status(500).json({ message: error, success: false });
    }
}

async function readNewsletter(req: NextApiRequest, res: NextApiResponse) {
    try {
        const readEmail = await prisma.newsletter.findMany({
            orderBy: { id: "asc" },
        });

        return res.status(200).json({
            success: true,
            data: readEmail.map((data) => ({
                id: data.id.toString(),
                email: data.email,
            })),
        });
    } catch (error) {
        return res.status(500).json({ error, success: false });
    }
}

// async function checkNewsletter({ req, res, email }) {
//     const bodyReq = req.body;
//     console.log(email);
//     try {
//         const checkEmail = prisma.newsletter.findFirst({
//             where: {
//                 email: "adadad",
//             },
//         });
//         if (!checkEmail) {
//             return res.status(200).json({ succes: false });
//         }
//         return res.status(200).json(checkEmail);
//     } catch (error) {
//         return res.status(500).json({ error, succes: false });
//     }
// }
