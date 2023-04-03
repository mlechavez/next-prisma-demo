import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Mehthod is not allowed " });

  const { name } = req.body;
  const result = await prisma.todo.create({
    data: {
      name,
    },
  });
  return res.json(result);
}
