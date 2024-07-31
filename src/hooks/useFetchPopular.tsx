import { useQuery } from "@tanstack/react-query";

import fetchData from "../helpers/api";

export interface MovieListInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
}

export interface MovieInterface {
  page?: number;
  results: Partial<MovieListInterface>[];
}

export const useFetchPopular = () => {
  return useQuery({
    queryKey: ["popular-movies"],
    queryFn: async () => {
      const res = await fetchData<MovieInterface>("/movie/popular?page=1");
      return res.data;
    },
    select: (data) => {
      const { results } = data;

      return { ...data, results: results.slice(0, 5) };
    },
  });
};
