export interface Movie{
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

export interface DetailedMovie extends Movie{
  budget: string;
  homepage: string;
  runtime: number;
  revenue: number;
  typing_array: string[];
}