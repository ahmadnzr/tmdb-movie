import { useQuery } from "@tanstack/react-query";

import fetchData from "../helpers/api";
import { MovieInterface } from "../helpers/types";

export const useFetchSearch = ({ query }: { query: string }) => {
  return useQuery({
    queryKey: ["search-movie", { query }],
    queryFn: async () => {
      const res = await fetchData<MovieInterface>(
        `/search/movie?page=1&query=${query}`,
      );
      return res.data;
    },
    retry: false,
    enabled: Boolean(query),
  });
};
