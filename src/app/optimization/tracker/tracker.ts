import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tracker',
  imports: [CommonModule],
  templateUrl: './tracker.html',
  styleUrl: './tracker.css',
})
export class Tracker {
  employees = [
  { id: 1, name: 'Arun', age: 24, department: 'IT', salary: 25000 },
  { id: 2, name: 'Priya', age: 23, department: 'HR', salary: 22000 },
  { id: 3, name: 'Karthik', age: 26, department: 'Finance', salary: 30000 },
  { id: 4, name: 'Divya', age: 25, department: 'IT', salary: 28000 },
  { id: 5, name: 'Vijay', age: 27, department: 'Marketing', salary: 32000 },
  { id: 6, name: 'Meena', age: 22, department: 'HR', salary: 20000 },
  { id: 7, name: 'Suresh', age: 28, department: 'Sales', salary: 35000 },
  { id: 8, name: 'Kavya', age: 24, department: 'IT', salary: 27000 },
  { id: 9, name: 'Praveen', age: 29, department: 'Finance', salary: 40000 },
  { id: 10, name: 'Nithya', age: 23, department: 'Sales', salary: 24000 }
];
refresh(){
  this.employees=[
  ...this.employees,
  {id:11,name:'sasi',age:27,department:'hr',salary:40000},
  {id:12,name:'prakash',age:28,department:'sales',salary:28000}
];
}
tracker(index:number,employee:any):any{
  return employee.name,employee.age,employee.department,employee.salary;
}
}
