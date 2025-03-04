import { Component, inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieComponent } from '../movie/movie.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-movie-container',
  imports: [MovieComponent, NgFor],
  templateUrl: './movie-container.component.html',
  styleUrl: './movie-container.component.scss'
})
export class MovieContainerComponent {
movies;
router = inject(Router);

constructor(private movieService: MovieService, private dialog: MatDialog) {
  this.movies = this.movieService.getMovie();
}

handleMovieClick(movie: any): void {
  this.dialog.open(MovieDialogComponent, {
    data: movie,
  });
}
}
