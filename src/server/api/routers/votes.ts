import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { kv } from "@vercel/kv";

export const votesRouter = createTRPCRouter({
  getVotesById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const votes = (await kv.get<number>(`votes:${input.id}`)) ?? 0;
      return { votes };
    }),
  upvoteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await kv.incr(`votes:${input.id}`);
      return true;
    }),
  downvoteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await kv.decr(`votes:${input.id}`);
      return true;
    }),
});
