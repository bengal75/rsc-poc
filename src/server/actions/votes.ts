"use server";
import { appRouter } from "src/server/api/root";
import { revalidatePath } from "next/cache";

export const upvote = async () => {
  const caller = appRouter.createCaller({});
  console.log("DEMO: Processing upvote");
  await caller.votes.upvoteById({ id: "server" });
  revalidatePath("/on-server");
};

export const downvote = async () => {
  const caller = appRouter.createCaller({});
  console.log("DEMO: Processing downvote");
  await caller.votes.downvoteById({ id: "server" });
  revalidatePath("/on-server");
};
