import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Users } from './users/users';



export const routes: Routes = [
   {path:'',component:Home},
   {path:'login',component:Login},
   {path:'user',component:Users}
    
];
