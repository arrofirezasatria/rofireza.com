import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";

//const prisma = new PrismaClient();
import prisma from "../../../lib/prisma";

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

async function addGuestBook(req, res) {
  const body = req.body;
  console.log(body);
  try {
    const newEntry = await prisma.guestbook.create({
      data: {
        email: body.email,
        body: body.body,
        created_by: body.created_by,
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
    const entries = await prisma.guestbook.findMany();
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
