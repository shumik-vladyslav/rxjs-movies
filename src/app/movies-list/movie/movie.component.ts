import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../models/movie.model';
import {AppState} from '../../redux/app.state';
import {Store} from '@ngrx/store';
import {DeleteMovie, UpdateMovie} from '../../redux/movies.action';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;

  constructor(private store: Store<AppState>) {}

  starClick(i){
    console.log(this.movie);
    this.movie.voted += 1;
    this.movie.rating = ((i + +this.movie.rating) / this.movie.voted).toFixed(2);
    this.store.dispatch(new UpdateMovie(this.movie));

  }

  onDelete() {
    this.store.dispatch(new DeleteMovie(this.movie))
  }

  ngOnInit() {
    console.log(this.movie)
  }

}
