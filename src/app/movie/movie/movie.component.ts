import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddStarPipe, PipesPipe } from '../../pipes.pipe';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MovieDialogComponent } from '../dialog/dialog.component';
import { Movie, MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-movie',
  imports: [PipesPipe, AddStarPipe, MatCardModule, MatButtonModule, NgFor, CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
movies$: Observable<Movie[]>;
@Output() onMovieClick =new EventEmitter();

constructor(public dialog: MatDialog, private movieService: MovieService){
  this.movies$ = this.movieService.getMovies();
}

movieClick(): void {
  this.onMovieClick.emit(this.movies$);
  console.log(this.movies$);

  this.dialog.open(MovieDialogComponent, {
    data: this.movies$
  });
}
}
