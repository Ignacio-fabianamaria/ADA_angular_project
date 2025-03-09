import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { CounterState } from './store/counter-reducer';
import { decrement, increment } from './store/counter-actions';



@Component({
  selector: 'app-ngrx-counter',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './ngrx-counter.component.html',
  styleUrl: './ngrx-counter.component.scss',
})
export class NgrxCounterComponent {
  store = inject(Store);
  count: number | undefined;

  constructor(){
    this.store.select('counter').subscribe((state:CounterState) => {
      this.count = state.count;

    })
  }
  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement())
  }
}
