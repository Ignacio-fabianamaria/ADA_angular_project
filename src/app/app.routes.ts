import { Routes } from '@angular/router';
import { MovieContainerComponent } from './movie/movie-container/movie-container.component';
import { PlaygroundComponent } from './playground/playground/playground.component';
import { AdminComponent } from './admin/admin/admin.component';

export const routes: Routes = [
  { path: '', component:MovieContainerComponent},
  { path: 'playground', component:PlaygroundComponent},
  { path: 'admin', component:AdminComponent}

];
