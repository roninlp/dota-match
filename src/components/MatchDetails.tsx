import { useQuery } from "@tanstack/react-query";
import { MatchResponse } from "../APIResponseTypes";
import fetchMatch from "../fetchMatch";

const MatchDetails = ({ matchId }: { matchId: string }) => {
  const { data, status, isFetching } = useQuery(["match", matchId], fetchMatch);
  if (status == "error") {
    throw new Error(`failed to retrieve match Data `);
  }

  return (
    <>
      {isFetching ? (
        <div>loading</div>
      ) : (
        <div className="mx-8 my-4 flex items-center justify-between rounded-lg border bg-gray-200 px-8 py-4">
          <div className="relative flex flex-col items-center justify-center">
            {data?.radiant_win && (
              <p className="absolute top-0 left-0 p-2 text-green-500">won</p>
            )}
            <img
              className="h-14 w-14"
              src={data?.radiant_team.logo_url}
              alt={data?.radiant_team.name}
            />
            <p>{data?.radiant_team.name}</p>
          </div>
          <p className="px-8 text-4xl">{data?.radiant_score}</p>
          <span className="text-5xl font-bold">-</span>
          <p className="px-8 text-4xl">{data?.dire_score}</p>
          <div className="relative flex flex-col items-center justify-center">
            {!data?.radiant_win && (
              <p className="absolute -top-2 -right-4 rounded-lg bg-green-500 px-2 py-1 text-white">
                won
              </p>
            )}
            <img
              className="h-14 w-14"
              src={data?.dire_team.logo_url}
              alt={data?.dire_team.name}
            />
            <p>{data?.dire_team.name}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default MatchDetails;
