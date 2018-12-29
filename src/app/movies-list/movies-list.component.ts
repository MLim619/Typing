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

  getPageRange(currentPage:number, pageCount: number){
    let numPages = 9;
    let arr = new Array(numPages);
    let start = 1;

    if (currentPage > Math.floor(numPages/2)){
      start = currentPage - Math.floor(numPages/2);
    }

    if (currentPage >= (pageCount - Math.floor(numPages/2))){
      start = (pageCount - numPages) + 1;
    }
    
    for(let i=0; i<arr.length; i++){
      arr[i] = start + i;
    }
    
    return arr;
  }

}
