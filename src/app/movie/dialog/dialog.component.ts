import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieComponent } from '../movie/movie.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AddStarPipe } from '../../pipes.pipe';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movie-dialog',
  imports: [MatCardModule, MatDividerModule,MatIconModule, AddStarPipe],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class MovieDialogComponent {
movie: any;

constructor(
  @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<MovieDialogComponent>,
  private movieService: MovieService,
) {
  this.movie = data;
}

public closeDialog(): void {
  this.dialogRef.close();
}
public delete(): void {
  this.movieService.deleteMovie(this.movie._id).subscribe({
    next: () => {
      console.log('Filme deletado com sucesso!');
      this.dialogRef.close(true); // Fecha o diálogo indicando sucesso
    }
  });
}
}

