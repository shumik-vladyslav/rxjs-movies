import {MovieModel} from '../models/movie.model';

export interface AppState {
  moviePage: {
    movies: MovieModel[]
  };
}
