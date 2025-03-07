import { Component, inject } from '@angular/core';
import { Movie, MovieService } from '../movie.service';
import { MovieComponent } from '../movie/movie.component';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../dialog/dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-container',
  imports: [MovieComponent, NgFor, CommonModule],
  templateUrl: './movie-container.component.html',
  styleUrl: './movie-container.component.scss'
})
export class MovieContainerComponent {
  movies$: Observable<Movie[]>;
  router = inject(Router);

constructor(private movieService: MovieService, private dialog: MatDialog) {
  this.movies$ = this.movieService.getMovies();
}

handleMovieClick(movie: any): void {
  this.dialog.open(MovieDialogComponent, {
    data: movie,
  });
}
}
