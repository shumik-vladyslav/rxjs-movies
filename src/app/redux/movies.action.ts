import {Action} from '@ngrx/store';
import {MovieModel} from '../models/movie.model';

export namespace MOVIE_ACTION {
  export const ADD_MOVIE = 'ADD_MOVIE';
  export const DELETE_MOVIE = 'DELETE_MOVIE';
  export const UPDATE_MOVIE = 'UPDATE_MOVIE';
}

export class AddMovie implements Action {
  readonly type = MOVIE_ACTION.ADD_MOVIE;

  constructor(public payload: MovieModel) {}
}

export class DeleteMovie implements Action {
  readonly type = MOVIE_ACTION.DELETE_MOVIE;

  constructor(public payload: MovieModel) {}
}

export class UpdateMovie implements Action {
  readonly type = MOVIE_ACTION.UPDATE_MOVIE;

  constructor(public payload: MovieModel) {}
}

export type MoviesAction = AddMovie | DeleteMovie | UpdateMovie;
