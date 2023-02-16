import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MatchResponse } from "../APIResponseTypes";
import fetchMatch from "../fetchMatch";
import MatchDetails from "./MatchDetails";

const SearchMatch = () => {
  const [matchId, setMatchId] = useState("7006883460");

  // const { data, isFetching } = useQuery(["match", matchId], fetchMatch);
  // console.log(data);

  return (
    <div className="mt-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const searchId = formData.get("search")?.toString() ?? "";
          console.log(searchId);
          setMatchId(searchId);
        }}
        className="flex flex-col items-center gap-4"
      >
        <label htmlFor="search">
          <span>Enter Match Details</span>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            name="search"
            id="search"
          />
        </label>
        <button className="max-w-fit rounded-md bg-orange-600 px-4 py-2 text-white">
          submit
        </button>
      </form>
      <MatchDetails matchId={matchId} />
      {/* {isFetching ? (
        <div className="my-8 mt-4 flex w-full items-center justify-center bg-gray-200 px-8 py-6">
          <p className="text-4xl font-bold text-black">loading</p>{" "}
        </div>
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
      )} */}
    </div>
  );
};
export default SearchMatch;
