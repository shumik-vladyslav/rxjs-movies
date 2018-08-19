import { Component, OnInit } from '@angular/core';
import {AppState} from '../redux/app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MoviesModel} from '../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public movieState: Observable<MoviesModel>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.movieState = this.store.select('moviePage');
  }

}
