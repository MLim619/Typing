import { MoviesListService } from './services/movies-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';

const appRoutes: Routes = [
  {path: 'movies/:sort', component: MoviesListComponent },
  {path: 'movie/:id', component: MovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    NavbarComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [MoviesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
