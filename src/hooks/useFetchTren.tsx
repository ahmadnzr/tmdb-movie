import { useQuery } from "@tanstack/react-query";

import fetchData from "../helpers/api";
import { MovieInterface } from "../helpers/types";

type Trend = "day" | "week";

export const useFetchTrend = ({ trend }: { trend: Trend }) => {
  return useQuery({
    queryKey: ["trending-movies", { trend }],
    queryFn: async () => {
      const res = await fetchData<MovieInterface>(
        `/trending/movie/${trend}?page=1`,
      );
      return res.data;
    },
    cacheTime: 0,
  });
};
