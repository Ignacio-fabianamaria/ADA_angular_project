import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-playground',
  imports: [MatDividerModule, MatExpansionModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {

}
