import { MoviesList } from '../models/movies-list';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {
  MoviesList: MoviesList;
  private url = 'http://api.themoviedb.org/3/movie/'
  private apiKey = '7399be4d4202988423c47a01e3b80bf0';

  constructor(private http: HttpClient) { }

  getMoviesList(sort: string, page?: string){
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page);
    return this.http.get(this.url + sort, {params});
  }
}
