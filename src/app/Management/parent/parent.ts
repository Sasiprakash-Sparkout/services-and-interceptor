import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parents {
  employee=signal([{
    name:'sasi',
    role:'developer',
    age:23
  },{
    name:'prakash',
    role:"devops",
    age:26
  }])
  
}
