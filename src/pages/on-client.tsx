import { type NextPage } from "next";
import CatImage from "src/components/CatImage";
import { api } from "src/utils/api";

const OnClient: NextPage = () => {
  const id = "client";
  const {
    data,
    isLoading: isQuerying,
    isError,
    refetch,
  } = api.votes.getVotesById.useQuery({ id });
  const { mutate: sendUpvote, isLoading: isUpvoting } =
    api.votes.upvoteById.useMutation({ onSettled: () => refetch() });
  const { mutate: sendDownvote, isLoading: isDownvoting } =
    api.votes.downvoteById.useMutation({ onSettled: () => refetch() });

  const isLoading = isQuerying || isUpvoting || isDownvoting;

  const upvote = () => {
    console.log("DEMO: Processing upvote");
    sendUpvote({ id });
  };
  const downvote = () => {
    console.log("DEMO: Processing downvote");
    sendDownvote({ id });
  };

  const numVotes = data?.votes ?? 0;
  console.log(`DEMO: Rendering ${id} image with ${numVotes} votes`);

  return (
    <>
      <CatImage imageId={id} sizeClass="w-80" />
      {isError ? (
        <div className="flex gap-6 text-3xl text-red-300">
          <p>Could not load votes</p>
        </div>
      ) : (
        <div
          className={`flex gap-6 text-3xl text-white ${
            isLoading ? "opacity-25" : "opacity-100"
          }`}
        >
          <button type="button" onClick={upvote}>
            ⏫
          </button>
          <p>{numVotes}</p>
          <button type="button" onClick={downvote}>
            ⏬
          </button>
        </div>
      )}
    </>
  );
};

export default OnClient;
