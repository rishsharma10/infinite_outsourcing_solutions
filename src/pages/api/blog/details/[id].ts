import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import Blog from "@/models/Blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();
  const blog = await Blog.findById(req.query.id);
  return res.status(200).json({ data: blog });
}
