import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import HeroSection from "@/models/HeroSection";
import { handleError } from "@/utils/validation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "GET") {
    const apiRes = await HeroSection.find();
    return res.status(200).json({ data: apiRes[0] });
  }

  if (req.method === "POST") {
    const response = await HeroSection.find();
    if(response.length > 0){
        return res.status(404).json(handleError(`Something went wrong`));
    }
    const { title, description,company_description,image } = req.body;
    const data = await HeroSection.create({ title, description, company_description,image });
    const apiRes = await data.toObject();
    return res
      .status(201)
      .json({ data: { ...apiRes } });
  }
  if (req.method === "PUT") {
    const response = await HeroSection.find();
    if(response.length < 0){
        return res.status(404).json(handleError(`Something went wrong`));
    }
    const _id = response[0]._id
    const { title, description,company_description,image } = req.body;
    const data = await HeroSection.findByIdAndUpdate(_id,{ title, description, company_description,image },{new:true});
    const apiRes = await data.toObject();
    return res
      .status(201)
      .json({ data: { ...apiRes } });
  }

  res.status(405).end();
}
