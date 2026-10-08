import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-component',
  imports: [],
  templateUrl: './subject-component.html',
  styleUrl: './subject-component.css',
}) 
export class SubjectComponent implements OnInit {
  Name$=new Subject()
  Roll$=new Subject<number>()
  notEmit$=new Subject<void>()
  constructor(){
    setTimeout(()=>{
      this.Name$.next("my angular app")
      this.Roll$.next(123456)
      this.notEmit$.next()
    },2000)

  }
  ngOnInit(): void {
    this.Name$.subscribe((data)=>{
      console.log(data)
    })
    this.Roll$.subscribe((data)=>{
      console.log(data)
    })
    this.notEmit$.subscribe((data)=>{
      console.log(data)
    })
  }

}
