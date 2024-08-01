import { useQuery } from "@tanstack/react-query";

import fetchData from "../helpers/api";
import { MovieListInterface } from "../helpers/types";

export const useFetchDetail = ({ id }: { id: number | null }) => {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const res = await fetchData<Partial<MovieListInterface>>(
        `/movie/${id}?page=1`,
      );
      return res.data;
    },
  });
};
