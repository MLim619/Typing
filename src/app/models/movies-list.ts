import { Movie } from './movie';

export interface MoviesList{
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }