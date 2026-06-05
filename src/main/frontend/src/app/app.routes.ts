import { Routes } from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {ContaktComponent} from './contakt/contakt.component/contakt.component';
import {UserAddComponent} from './users/users/add.users/add.users.component';
import {UserDelComponent} from './users/users/del.users/del.users.component';
import {UserModifyComponent} from './users/users/modify.users/modify.users.component';

export const routes: Routes = [

  {path: 'users', component: UsersComponent},
  {path: 'contakt', component: ContaktComponent},
  {path: 'add.users', component: UserAddComponent},
  {path: 'modify.users', component: UserModifyComponent},
  {path: 'del.users', component: UserDelComponent}

];
