import { MoviesService } from '../services/movies-list.service';
import { MoviesList } from './../models/movie-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  moviesList: MoviesList;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList(page?: string){
    this.service.getMoviesList(page).subscribe(
      res =>{
        this.moviesList = res as MoviesList;
      });
  }

  counter(i: number){
    let arr = new Array(i)
    return arr;
  }

}
