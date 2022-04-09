import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";

const prisma = new PrismaClient();
/* 


import prisma from 'lib/prisma'; */

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        return await readGuestBook(req, res);
    } else if (req.method === "POST") {
        return await addGuestBook(req, res);
    } else {
        return res.status(500).json({ message: "error", success: false });
    }
}

async function addGuestBook(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    try {
        const newEntry = await prisma.guestbook.create({
            data: {
                email: body.email,
                body: body.body,
                created_by: body.created_by
            }
        })
        return res.status(200).json({ newEntry, success: 'true' })
    } catch (error) {
        return res.status(500).json({ error, success: false })
    }
}

async function readGuestBook(req: NextApiRequest,
    res: NextApiResponse) {
    const body = req.body
    try {
        const allGuestBook = await prisma.guestbook.findMany();
        return res.status(200).json({ allGuestBook, success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error reading database', success: false })
    }
}
