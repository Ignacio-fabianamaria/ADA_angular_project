import { Routes } from '@angular/router';
import { MovieContainerComponent } from './movie/movie-container/movie-container.component';
import { PlaygroundComponent } from './playground/playground/playground.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';

export const routes: Routes = [
  { path: '', component:MovieContainerComponent},
  { path: 'playground', component:PlaygroundComponent},
  { path: 'contatos', component:ContactsComponent},
  { path: 'admin', component:AdminComponent}

];
