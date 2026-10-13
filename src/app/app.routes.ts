import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Login } from './login/login';
import { Users } from './users/users';
import { Obserable } from './RXJS/obserable/obserable';
import { Operators } from './RXJS/operators/operators';
import { SubjectComponent } from './RXJS/subject-component/subject-component';
import { Joins } from './RXJS/joins/joins';
import { Signals } from './signals/signals';
import { Parent } from './parent/parent';
import { Parents } from './Management/parent/parent';
import { Tracker } from './optimization/tracker/tracker';
import { Practise } from './optimization/practise/practise';



export const routes: Routes = [
   {path:'',component:Home},
   {path:'login',component:Login},
   {path:'user',component:Users},
   {path:'observable',component:Obserable},
   {path:'operator',component:Operators},
   {path:'subject',component:SubjectComponent},
   {path:'joins',component:Joins},
   {path:'signals',component:Signals},
   {path:'communication',component:Parent},
   {path:'emp-management',component:Parents},
   {path:'track-by',component:Tracker},
   {
      path:'pracise',loadComponent:()=>import('./optimization/practise/practise').then(m=>m.Practise)
   }
    
];
