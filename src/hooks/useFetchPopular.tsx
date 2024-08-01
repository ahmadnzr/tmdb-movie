import { useQuery } from "@tanstack/react-query";

import fetchData from "../helpers/api";
import { MovieInterface } from "../helpers/types";

export const useFetchPopular = () => {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const res = await fetchData<MovieInterface>("/movie/popular?page=1");
      return res.data;
    },
    select: (data) => {
      const { results } = data;

      return { ...data, results: results?.slice(0, 5) };
    },
  });
};
