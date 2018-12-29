import { MoviesService } from './services/movies-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: 'movies/:sort', component: MoviesListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
