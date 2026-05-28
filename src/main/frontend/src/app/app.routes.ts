import { Routes } from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {ContaktComponent} from './contakt/contakt.component/contakt.component';

export const routes: Routes = [

  {path: 'users', component: UsersComponent},
  {path: 'contakt', component: ContaktComponent}
];
