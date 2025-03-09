import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgrxCounterComponent } from '../ngrx-counter/ngrx-counter.component';

@Component({
  selector: 'app-playground',
  imports: [MatDividerModule, MatExpansionModule, MatCardModule, NgrxCounterComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {

}
