import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method is not allowed" });
  }

  const savedContact = await prisma.contact.create({
    data: JSON.parse(req.body),
  });

  return res.json(savedContact);
};
