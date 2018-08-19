import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesFormComponent } from './movies-list/movies-form/movies-form.component';
import { MovieComponent } from './movies-list/movie/movie.component';
import {moviesReducer} from './redux/movies.reducer';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesFormComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({moviePage: moviesReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
