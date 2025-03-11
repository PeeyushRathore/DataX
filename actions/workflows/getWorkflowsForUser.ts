"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

async function GetWorkflowsForUser() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthenticated");
  }
  return prisma.workflow.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}

export default GetWorkflowsForUser;
