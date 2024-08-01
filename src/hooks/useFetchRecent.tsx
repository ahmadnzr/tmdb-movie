import { useQuery } from "@tanstack/react-query";

import fetchData from "../helpers/api";
import { MovieInterface } from "../helpers/types";

type Range = {
  start: string;
  end: string;
};

export const useFetchRecent = ({ start, end }: Range) => {
  return useQuery({
    queryKey: ["recent-movies", { start, end }],
    queryFn: async () => {
      const res = await fetchData<MovieInterface>(
        `/discover/movie?page=1??primary_release_date.gte=${start}&primary_release_date.lte=${end}`,
      );
      return res.data;
    },
    select: (data) => {
      const { results } = data;

      return { ...data, results: results.slice(0, 15) };
    },
  });
};
