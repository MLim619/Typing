import { ActivatedRoute } from '@angular/router';
import { DetailedMovie } from './../models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: DetailedMovie;
  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getMovie(params['id']);
      });
  }
  getMovie(id: number){
    this.service.getMovie(id)
      .subscribe(res => {
        this.movie = res as DetailedMovie;
        this.movie.typing_array = this.toCharArray(this.movie.overview);
      });
  }
  toCharArray(paragraph: string){
    let arr = new Array();
    for(let i=0; i<paragraph.length; i++)
      arr.push(paragraph[i]);
    return arr;
  }
}
