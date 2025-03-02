import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomPipePipe } from '../../custom-pipe.pipe';

@Component({
  selector: 'app-movie',
  imports: [UpperCasePipe, CustomPipePipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
@Input() movie: any;

}
