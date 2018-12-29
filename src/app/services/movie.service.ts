import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'http://api.themoviedb.org/3/movie/'
  private apiKey = '7399be4d4202988423c47a01e3b80bf0';

  constructor(private http: HttpClient) { }

  getMovie(movieId: number){
    let params = new HttpParams()
      .set('api_key', this.apiKey);
    return this.http.get(this.url + movieId, {params});
  }

}
