import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddStarPipe, PipesPipe } from '../../pipes.pipe';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MovieDialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-movie',
  imports: [PipesPipe, AddStarPipe, MatCardModule, MatButtonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
@Input() movie: any;
@Output() onMovieClick =new EventEmitter();

constructor(public dialog: MatDialog){

}

movieClick(): void {
  this.onMovieClick.emit(this.movie);
  console.log(this.movie);

  this.dialog.open(MovieDialogComponent, {
    data: this.movie  
  });
}
}
