import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  imports: [UpperCasePipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
@Input() movie: any;

}
