import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieComponent } from '../movie/movie.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-container',
  imports: [MovieComponent, NgFor],
  templateUrl: './movie-container.component.html',
  styleUrl: './movie-container.component.scss'
})
export class MovieContainerComponent {
movies;
constructor(private movieService: MovieService ){
this.movies = this.movieService.getMovie()
}
}
