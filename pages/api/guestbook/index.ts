import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";
import { getSession } from "next-auth/react";

//const prisma = new PrismaClient();
import prisma from "../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        return await readGuestBook(req, res);
    }

    const session = await getSession({ req });
    const { email, name } = session.user;

    if (!session) {
        return res.status(403).send("Unauthorized");
    }

    if (req.method === "POST") {
        return await addGuestBook(req, res, email, name);
    }

    return res.status(500).json({ message: "error", success: false });
}

async function addGuestBook(req, res, email, name) {
    const bodyReq = req.body;
    console.log(bodyReq.body);
    try {
        const newEntry = await prisma.guestbook.create({
            data: {
                email: email,
                body: bodyReq.body,
                created_by: name,
            },
        });
        return res.status(200).json({
            id: newEntry.id.toString(),
            email: newEntry.email,
            body: newEntry.body,
            created_by: newEntry.created_by,
        });
    } catch (error) {
        return res.status(500).json({ error, success: false });
    }
}

async function readGuestBook(req: NextApiRequest, res: NextApiResponse) {
    try {
        const entries = await prisma.guestbook.findMany({
            orderBy: {
                updated_at: "desc",
            },
        });
        return res.json(
            entries.map((entry) => ({
                id: entry.id.toString(),
                email: entry.email,
                body: entry.body,
                created_by: entry.created_by,
                updated_at: entry.updated_at,
            }))
        );
    } catch (error) {
        return res.status(500).json({ error, success: false });
    }
}
