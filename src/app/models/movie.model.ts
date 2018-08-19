export class MovieModel {
  constructor(
    public name: string,
    public id?: number,
    public rating?: any,
    public voted?: number
  ) {}
}

export interface MoviesModel {
  movies: MovieModel[];
}
