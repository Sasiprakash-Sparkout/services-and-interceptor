import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Parentchild } from './parentchild/parentchild';


@Component({
  selector: 'app-practise',
  standalone:true,
  imports: [CommonModule,Parentchild],
  templateUrl: './practise.html',
  styleUrl: './practise.css',
})
export class Practise {
  count=0
  onsubmit(event:any){
     this.count=event;
  }
  employees:any[] = [
    { id: 1, name: 'Arun', department: 'IT', salary: 25000 },
    { id: 2, name: 'Bala', department: 'HR', salary: 22000 },
    { id: 3, name: 'Kumar', department: 'Sales', salary: 28000 }
  ];
  onClick() {
    this.employees = [
...this.employees,
      { id: 4, name: 'sasi', department: 'IT', salary: 340000 }
    ]
  }
  trace(id:number,emp:any):any{
    return emp.id
  }
}
