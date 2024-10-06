import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
    {path:'Home',component:UserListComponent},
    {path :'Edit/:id',component:EditUserComponent},
    // {path :'',redirectTo :'/Edit',pathMatch:'full'},
    // {path:'', redirectTo: '/Home',pathMatch:'full'},
];
