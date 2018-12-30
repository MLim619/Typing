import { ActivatedRoute } from '@angular/router';
import { DetailedMovie } from './../models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  movie: DetailedMovie;

  @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) { 
    this.evaluateKey(event.key)
  }

  constructor(private service: MovieService, private route: ActivatedRoute, private el: ElementRef) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getMovie(params['id']);
      });
  }
  evaluateKey(key: string){
    let currentLetter = this.el.nativeElement.querySelector('.letter-active');
    let nextLetter = currentLetter.nextSibling;
    let previousLetter = currentLetter.previousSibling;

    if (key.length === 1){
      let newClass = (key === currentLetter.getAttribute('value')) ? 'letter-typed': 'letter-error';
      currentLetter.classList.replace('letter-active', newClass);
      
      nextLetter.classList.add('letter-active');
    }else{
      if (key === 'Backspace'){
        currentLetter.classList.remove('letter-active');
        previousLetter.classList.remove('letter-typed');
        previousLetter.classList.remove('letter-error');
        previousLetter.classList.add('letter-active');
      }
    }
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
