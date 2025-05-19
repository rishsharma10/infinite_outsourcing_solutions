import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/db';
import Services from '@/models/Services';
import { getCollectionCount } from '@/utils/getCollectionCount';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'GET') {
    const service = await Services.find();
    const count = await getCollectionCount(Services)
    return res.status(200).json({data:service,count});
  }

  if (req.method === 'POST') {
    const service = await Services.create(req.body);
    const data = service.toObject()
    return res.status(201).json({data:data,message:"Service added successfully"});
  }

  res.status(405).end();
}
