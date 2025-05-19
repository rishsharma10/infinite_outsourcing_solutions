import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import HeroSection from "@/models/HeroSection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "GET") {
    const apiRes = await HeroSection.find();
    return res.status(200).json({ data: apiRes[0] });
  }
  res.status(405).end();
}
