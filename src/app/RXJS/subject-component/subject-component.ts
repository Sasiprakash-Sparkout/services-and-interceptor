import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Auth } from '../../Auth/auth';

@Component({
  selector: 'app-subject-component',
  imports: [],
  templateUrl: './subject-component.html',
  styleUrl: './subject-component.css',
}) 
export class SubjectComponent  implements OnInit {
  //beahviour subject
  behaviour=inject(Auth)
  //noral subject
 Name$=new Subject();
 Rollno$=new Subject<number>()
 constructor(){
 setTimeout(()=>{
   this.Name$.next("my vebsite")
   this.Rollno$.next(123455)
   //to emit the latest value using behavioural subject 
   this.behaviour.mysubject$.next("2 months 3 week")
 },4000)
  
  
 }
 ngOnInit(): void {
  this.Name$.subscribe((data:any)=>{
    console.log(data)
  })
  this.Rollno$.subscribe((data:any)=>{
    console.log(data)
  })
  this.behaviour.mysubject$.subscribe((data:string)=>{
    console.log(data)
  })
 }
 

}
