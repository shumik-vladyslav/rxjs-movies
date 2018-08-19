import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../redux/app.state';
import {AddMovie} from '../../redux/movies.action';
import {MovieModel} from '../../models/movie.model';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.css']
})
export class MoviesFormComponent  {


  private id: number = 2

  name: string = ''

  constructor(private store: Store<AppState>) {
  }

  onAdd() {

    this.id = ++this.id

    const movie = new MovieModel(
      this.name,
      this.id,
      0,
      0
    );

    this.store.dispatch(new AddMovie(movie))

    this.name = ''
  }

  onLoad() {
    // todo
  }


}
