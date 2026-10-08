import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-obserable',
  imports: [],
  templateUrl: './obserable.html',
  styleUrl: './obserable.css',
})
export class Obserable {
 /*  demo$=of(["sasi","prakash","sparkout"]);
  demo1$=from(["sasi","prakash","sparkout"]);
  break$=interval(2000);
  timeout$=timer(3000);
   */

  constructor(){
   /*  this.timeout$.subscribe(time=>{
      console.log('life is a race',time)
    })
    this.break$.subscribe(data=>{
      console.log(data)
    })
    this.demo$.subscribe(data=>{
      console.log(data)
    })
    this.demo1$.subscribe(data=>{
      console.log(data)
    })
    const obser$=new Observable(data=>{
      data.next("hello world")
    })
    obser$.subscribe(value=>{
      console.log(value)
    })*/
    } 
}
