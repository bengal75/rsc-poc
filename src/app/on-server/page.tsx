import CatImage from "src/components/CatImage";
import { appRouter } from "src/server/api/root";
import { upvote, downvote } from "src/server/actions/votes";

const OnServer = async () => {
  const id = "server";

  const caller = appRouter.createCaller({});
  const data = await caller.votes.getVotesById({ id });

  const numVotes = data?.votes ?? 0;
  console.log(`DEMO: Rendering ${id} image with ${numVotes} votes`);

  return (
    <>
      <CatImage imageId={id} sizeClass="h-96" />
      <div className="flex gap-6 text-3xl text-white">
        <form action={upvote}>
          <button type="submit">⏫</button>
        </form>
        <p>{numVotes}</p>
        <form action={downvote}>
          <button type="submit">⏬</button>
        </form>
      </div>
    </>
  );
};

export default OnServer;
