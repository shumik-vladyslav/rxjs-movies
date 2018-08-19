import {MovieModel} from '../models/movie.model';
import {MOVIE_ACTION, MoviesAction} from './movies.action';

const initialState = {
  movies: [
    new MovieModel('Interstellar', 1, 0, 0),
    new MovieModel('Dead Poll', 2, 0, 0)
  ]
}

export function moviesReducer(state = initialState, action: MoviesAction) {
  switch (action.type) {
    case MOVIE_ACTION.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      }
    case MOVIE_ACTION.DELETE_MOVIE:
      return {
        ...state,
        movies: [...state.movies.filter(c => c.id !== action.payload.id)]
      }
    case MOVIE_ACTION.UPDATE_MOVIE:
      const idx = state.movies.findIndex(c => c.id === action.payload.id)
      state.movies[idx] = action.payload;
      return {
        ...state,
        movies: [...state.movies]
      }
    default:
      return state;
  }
}
