import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const todoId = parseInt(req.query.id as string);
    const { name } = JSON.parse(req.body);
    const result = await prisma.todo.update({
      where: { id: todoId },
      data: { name },
    });

    return res.json(result);
  }

  if (req.method === "DELETE") {
    const todoId = parseInt(req.query.id as string);
    const { name } = JSON.parse(req.body);
    const result = await prisma.todo.delete({
      where: { id: todoId },
    });

    return res.json(result);
  }
}
