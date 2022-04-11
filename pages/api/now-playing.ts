import { fsync } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying(req, res);
}

async function getNowPlaying(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    return res.status(200).json({ message: "its work", success: true });
  } catch (error) {
    return res.status(500).json({ message: "error", success: false });
  }
}
