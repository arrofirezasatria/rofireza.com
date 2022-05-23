import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        return await readProjectShowcase(req, res);
    }

    return res.status(500).json({ message: "error", success: false });
}

async function readProjectShowcase(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await prisma.showcase.findMany();
        return res.json(
            data.map((data) => ({
                id: data.id.toString(),
                name: data.name,
                alt: data.alt,
                image: data.image,
                image_small: data.smallimage,
                category: data.category,
                link1: data.link1,
                link2: data.link2,
            }))
        );
    } catch (error) {
        return res.status(500).json({ error, succes: false });
    }
}
