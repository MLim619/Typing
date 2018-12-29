import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface MoviesList{
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

interface Movie{
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  private url = 'http://api.themoviedb.org/3/movie/popular?api_key=7399be4d4202988423c47a01e3b80bf0'
  moviesList: MoviesList;
  //movies: Movie[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMovies();
  }

  counter(i: number){
    let arr = new Array(i)
    return arr;
  }

  test(deviceValue){
    console.log("value:" + deviceValue);
  }


  getMovies(page?: string){
    let params = new HttpParams().set('page', page);
    this.http.get<MoviesList>(this.url, { params })
      .subscribe(res =>{
        this.moviesList = res;
      });
  }

}
