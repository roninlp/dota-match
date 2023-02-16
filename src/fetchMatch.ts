import { QueryFunction } from "@tanstack/react-query";
import { MatchResponse } from "./APIResponseTypes";

const fetchMatch: QueryFunction<MatchResponse, ["match", string]> = async ({
  queryKey,
}) => {
  const matchID = queryKey[1];
  const res = await fetch(`https://api.opendota.com/api/matches/${matchID}`);
  if (!res.ok) {
    throw new Error("match not found");
  }
  return res.json();
};

export default fetchMatch;
