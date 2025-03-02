import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddStarPipe, PipesPipe } from '../../pipes.pipe';

@Component({
  selector: 'app-movie',
  imports: [UpperCasePipe, PipesPipe, AddStarPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
@Input() movie: any;

}
