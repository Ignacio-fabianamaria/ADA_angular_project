import { Routes } from '@angular/router';
import { MovieContainerComponent } from './movie/movie-container/movie-container.component';
import { PlaygroundComponent } from './playground/playground/playground.component';

export const routes: Routes = [
  { path: 'filmes', component:MovieContainerComponent},
  { path: 'playground', component:PlaygroundComponent}
];
